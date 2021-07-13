const fs = require('fs')
const path = require('path')
const fswrite = fs.writeFileSync
const fsappend = fs.appendFileSync

const writeHeader = (pathToFile, header) => fswrite(pathToFile, header + '\r\n')
const append = (pathToFile, row) => fsappend(pathToFile, row + '\r\n')

const escapeComment = comment => comment ? '"' + comment.replace(/"/g, "'") + '"' : ''

const writeToCSV = (courseId, data) => {
  const csv = path.join(__dirname, `output/${courseId}-discussion.csv`)

  const header = [
    //'author_id',
    //'author_name',
    //'post_id',
    //'post_parent_id',
    //'discussion_topic_title',
    //'discussion_topic_message',
    'post_message',
    //'count_of_likes',
    'timestamp'
  ]

  writeHeader(csv, header)

  data.forEach(discussion => {
    append(csv, [                                 // write discussion to CSV
      //discussion.authorId,
      //escapeComment(discussion.authorName),
      //discussion.id,
      //'',                                         // discussion topics cannot have a parent ID
      //escapeComment(discussion.topicTitle),
      //escapeComment(discussion.topicMessage),
      //'',
      //'',
      //discussion.timestamp
    ])

    discussion.replies.forEach(reply =>
      reply.forEach(response => {
        append(csv, [                              // write replies to CSV
          //response.authorId,
          //escapeComment(response.authorName),
          //response.id,
          //response.parentId,
          //escapeComment(discussion.topicTitle),
          //escapeComment(discussion.topicMessage),
          escapeComment(response.message),
          //response.likes,
          response.timestamp
        ])
      })
    )
  })
}

module.exports = writeToCSV
