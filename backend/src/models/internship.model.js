import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const progressSchema = new Schema({
    day: { type: Number },
    status: { type: Number, enum: [1, 0] }, // 1 completed, 0 not completed
    file: { type: String } // drive link
});

const internshipSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    internshipType: { type: Number, enum: [1, 2, 3, 4] }, // 1 for (15 days), 2 for (1 month), 3 for (2 months), 4 for (3 months)
    domain: { type: Schema.Types.ObjectId, ref: 'Domain' },
    progress: [progressSchema],
}, { timestamps: true }); // Enable timestamps

const Internship = mongoose.model('Internship', internshipSchema);

export default Internship;
