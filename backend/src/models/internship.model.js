import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const progressSchema = new Schema({
    day: { type: Number, required: true },
      
    file: {
      task1:{type:String},
      task2:{type:String},
      task3:{type:String},
      task4:{type:String},
      task5:{type:String},
    },
  });
  

  const internshipSchema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      internshipType: { type: Number, enum: [1, 2, 3, 4] }, 
      domain: { type: Schema.Types.ObjectId, ref: 'Domain' },
      transactionId: { type: String, required: true, unique: true },
      role: { type: String, required: true },
      progress: [progressSchema], 
      completion: { type: Boolean, default: false },
      verification: { type: String, default: 'pending' },
      StartedAt:{type:Date}
    },
    { timestamps: true } 
  );
  
const Internship = mongoose.model('Internship', internshipSchema);

export default Internship;
