const { Post } = require('../models');

const postData = [
  {
    "title": "Fox and Hound",
    "post_body": "They were constantly present even at the hardest of times.",
    "user_id": 1
  },
  {
    "title": "ICL and IBM",
    "post_body": "Bold pink and Navy Blue giants roamed the earth. Bringing terror to small computers. ",
    "user_id": 2
  },
  {
    "title": "Death Knell",
    "post_body": "Ashton Tate and Bill Gates just decided to shake the tree really hard.",
    "user_id": 3
  },
  {
    "title": "Printing Needs",
    "post_body": "Estherprints is a corporeal entity with no ease whatsoever. They operate out of the city. Their strength is not at this moment properly understood. Alfie will tell us more about them.",
    "user_id": 4
  },
  {
    "title": "Temporary Acoomodations",
    "post_body": "Magda will put you up for a few days. Azatecas will come for you as soon as she can make it. She will supply all computing needs.",
    "user_id": 5
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;