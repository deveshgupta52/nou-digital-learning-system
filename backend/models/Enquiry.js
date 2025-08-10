import mongoose from 'mongoose';

const enquirySchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    gender : {
        type : String,
        required : true
        
    },

    address : {
        type : String,
        required : true
    },

    contactNo : {
        type : Number,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    enquiryText : {
        type : String
    },

    enquiryDate : {
        type : Date,
        default : Date.now
    }
});

const enquiryModel = mongoose.model('enquiry', enquirySchema);
export default enquiryModel;