import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const InternAdminSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    email:{
        type:String,
        required:true
    },
    FullName:{
        type:String,
        required:true
    },
    TransactionId:{
        type:String,
        required:true
    },
    Domain:{
        type:String,
        required:true
    },
    Plan:{
        type:String,
        required:true
    },
    Status:
    {
        type:String,
        default:"pending",
    }
},{timestamps:true});

const InternAdmin = mongoose.model('InternAdmin',InternAdminSchema);
export default InternAdmin;