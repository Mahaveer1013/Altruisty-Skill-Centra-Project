import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: false},
  username: { type: String, required: false},
  password: { type: String, required: false },
  user_type: { type: Number, enum: [1, 2], default: 2 },  // user_type can be 1 (admin) or 2 (user)
  github_link : {type: String,required:false},
  linkedIn_link : {type:String,required:false},
  Interest:{type:String, required:false},
  Portfolio:{type:String,required:false},
  ProfilePicture:{type:String,required:false},
  phone_number:{type:String, required:false},
  college:{type:String,required:false},
  Profile:{type:String,required:false},
  Resume:[
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
      mimeType: { type: String, required: true },
      size: { type: Number, required: true },
      driveId: { type: String, required: true },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    },
  ]
},
{
  timestamps:true
});

const User = mongoose.model('User', userSchema);

export default User
