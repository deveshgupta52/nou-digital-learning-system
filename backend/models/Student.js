import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    rollno: {
      type: Number,
      required: [true, 'Roll number is required'],
      unique: true,
      min: [1, 'Roll number must be positive'],
      default: () => Math.floor(100000 + Math.random() * 900000)  

    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [3, 'Name must be at least 2 characters long']
    },
    fname: {
      type: String,
      required: [true, 'Father’s name is required'],
      trim: true
    },
    mname: {
      type: String,
      required: [true, 'Mother’s name is required'],
      trim: true
    },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
      enum: {
        values: ['Male', 'Female', 'Other'],
        message: 'Gender must be Male, Female, or Other'
      }
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
      maxlength: [500, 'Address too long']
    },
    program: {
      type: String,
      required: [true, 'Program is required'],
      trim: true
    },
    branch: {
      type: String,
      required: [true, 'Branch is required'],
      trim: true
    },
    year: {
      type: String,
      required: [true, 'Year is required'],
      match: [/^\d{4}$/, 'Year must be in YYYY format']
    },
    contactno: {
      type: String,
      required: [true, 'Contact number is required'],
      match: [/^[6-9][0-9]{9}$/, 'Contact must be a valid 10-digit Indian number']
    },
    emailaddress: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    password:{
      type:String,
      required:true
    },
    regdate: {
      type: Date,
      default:Date.now,
      required: [true, 'Registration date is required']
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Student', studentSchema);
