[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
# Canvas Discussion
This project pulls via the Canvas API the discussions from the specified Canvas course and exports it as CSV. The columns exported are:
* 'author_id', -- NOT EXPORTED
* 'author_name', -- NOT EXPORTED
* 'post_id', -- NOT EXPORTED
* 'post_parent_id', -- NOT EXPORTED
* 'discussion_topic_title', -- NOT EXPORTED
* 'discussion_topic_message', -- NOT EXPORTED
* 'post_message',
* 'count_of_likes', -- NOT EXPORTED
* 'timestamp'

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for use with your own API tokens and Canvas domains.

### Prerequisites

1. **Install [Node 10 or greater](https://nodejs.org)**.
2. **Install [Git](https://git-scm.com/downloads)**.

### Installation and execution of script

1. Clone this repo. `git clone https://github.com/Mental-Inferno/canvas-discussion-modified.git`
2. Then cd into the repo. `cd canvas-discussion-only_topics_and_responses`
3. Run the installation script. `npm install` (If you see `babel-node: command not found`, you've missed this step.)
4. Generate Canvas API token and copy it to clipboard.
5. Rename the `ChangeMyName.env` file to `.env`.
6. Inside the `.env` file, remove the `//` from: `//CANVAS_API_TOKEN=` and `//CANVAS_API_DOMAIN=` but do NOT make them into one line. 
7. After `CANVAS_API_TOKEN=` paste your Canvas token (e.g. `CANVAS_API_TOKEN=mYcAnVa5T0k3nH3rE`). 
8. After `CANVAS_API_DOMAIN=` paste your institution's API domain (e.g. `CANVAS_API_DOMAIN=https://utoronto.instructure.com/api/v1`). 
9. Add your course ID to `index.js`, where it says: `//{course id} add course ID here!` (It's near the bottom). Type the ID number in front of the double backslash.
10. Run the script. `npm start`.
11. An `{course ID}.csv` file should be generated with discussion data in the output folder.

## Author

* [justin0022](https://github.com/justin0022) -
**Justin Lee** &lt;justin.lee@ubc.ca&gt;

## Modified by

* [Mental-Inferno](https://github.com/Mental-Inferno) -
**Brendan L.**

## License

This project is licensed under the GNU General Public License v3.0.
