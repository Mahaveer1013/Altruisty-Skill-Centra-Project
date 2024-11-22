import mongoose from 'mongoose'


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

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: { type: String }, 
  sections: [sectionSchema]
});

const CourseSection = mongoose.model('Course', courseSchema);




export default CourseSection;
