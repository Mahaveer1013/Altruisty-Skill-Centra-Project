import mongoose from 'mongoose'


const { Schema } = mongoose;


const resourceSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String }
});

// Define schema for topics
const topicSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  keyConcepts: [String], // Array of strings
  resources: [resourceSchema] // Array of resources
});

// Define schema for sections
const sectionSchema = new Schema({
  title: { type: String, required: true },
  topics: [topicSchema] // Array of topics
});

// Define schema for courses
const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  domainId: { type: mongoose.Schema.Types.ObjectId,required:true}, // Reference to the Domain model
  sections: [sectionSchema] // Array of sections
});

const CourseSection = mongoose.model('Course', courseSchema);




export default CourseSection;
