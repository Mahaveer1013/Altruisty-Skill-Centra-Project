import mongoose from 'mongoose';
const { Schema } = mongoose;


const domainSchema = new Schema({
    domain: { type: String, required: true }
});

const Domain = mongoose.model('Domain', domainSchema);

export default Domain;
