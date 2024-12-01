import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, ref: 'User' 
  },
  ProjectName: {
    type: String,
    required: true,
  },
  ProjectDescription: {
    type: String,
    required: true,
  },
  ProjectGithub: {
    type: String,
    required: true,
  },
  ProjectLink: {
    type: String,
  }
});


const userSchema = new Schema({
  email: { type: String, required: false},
  username: { type: String, required: false},
  password: { type: String, required: false },
  user_type: { type: Number, enum: [1, 2], default: 2 },  
  github_link: { type: String, required: false },
  linkedIn_link: { type: String, required: false },
  Interest: { type: String, required: false },
  Portfolio: { type: String, required: false },
  ProfilePicture: { type: String, required: false },
  phone_number: { type: String, required: false },
  college: { type: String, required: false },
  Profile: { type: String, required: false },
  Resume: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
      mimeType: { type: String, required: true },
      size: { type: Number, required: true },
      driveId: { type: String, required: true },
     
    }
  ],
 
  Projects: [projectSchema]
},
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
