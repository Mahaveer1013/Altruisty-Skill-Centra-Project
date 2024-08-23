import mongoose from 'mongoose';
const { Schema } = mongoose;

const testCaseSchema = new Schema({
    input: { type: String, required: true },
    expectedOutput: { type: String, required: true }
});

const internshipQuestionSchema = new Schema({
    domain: { type: Schema.Types.ObjectId, ref: 'Domain' },
    question: { type: String, required: true },
    testcases: [testCaseSchema],
    questionType: {type: Number, enum: [1, 2, 3]} // 1 for easy , 2 for medium, 3 for difficult
});

const InternshipQuestion = mongoose.model('InternshipQuestion', internshipQuestionSchema);

export default InternshipQuestion;
