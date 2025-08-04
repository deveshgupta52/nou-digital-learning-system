import mongoose from 'mongoose';

const loginSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true // usually email
  },
  password: {
    type: String,
    required: true
  },
  usertype: {
    type: String,
    default: 'student'  // ya admin
  },
  status: {
    type: String,
    default: 'active'
  }
});

export default mongoose.model('Login', loginSchema);
