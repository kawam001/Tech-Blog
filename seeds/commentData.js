const { Comment } = require('../models');

const commentData = [
  {
    "comment_text": "The objective is now accomplished.",
    "post_id": 1,
    "user_id": 5,
  },
  {
    "comment_text": "They always want to put it off to the next day.",
    "post_id": 2,
    "user_id": 3,
  },
  {
    "comment_text": "I intend to submit it by the end of next week.",
    "post_id": 3,
    "user_id": 4,
  },
  {
    "comment_text": "Not everyone understands the mechanics of Javascript.",
    "post_id": 4,
    "user_id": 2,
  },
  {
    "comment_text": "Please edit and compile the text. Machines will take care of the rest",
    "post_id": 5,
    "user_id": 1,
  }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;