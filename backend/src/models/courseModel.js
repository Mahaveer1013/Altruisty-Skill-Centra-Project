
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String }
});


const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  keyConcepts: [String],
  resources: [resourceSchema]
});


const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  topics: [topicSchema]
});


module.exports = mongoose.model('Section', sectionSchema);
