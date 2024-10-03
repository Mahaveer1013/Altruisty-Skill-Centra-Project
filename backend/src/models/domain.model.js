import mongoose from 'mongoose';
const { Schema } = mongoose;


const domainSchema = new Schema({
    title: { type: String, required: true },
    description:{type:String,required:true},
    registered:{type:Number,default:0},
    availSlots:{type:Number,required:true}
    
});

const Domain = mongoose.model('Domain', domainSchema);

export default Domain;
