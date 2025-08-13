import mongoose from 'mongoose';

const enquirySchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    phone : {
        type : Number,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    subject : {
        type: String,
        required: [true, 'Phone number is required']
    },

    message : {
        type: String,
        required : [true, 'Subject is required'],
        minlength : [10, 'Message must be at leat 10 character long']
    },

    status : {
        type : String,
        default: 'New',
        enum : {
            values: ['New', 'In Progress', 'Resolved'],
            message : 'Status must be New, In Progress, Or Resolved'
        }
    }
}, {timestamps : true});

const enquiryModel = mongoose.model('enquiry', enquirySchema);
export default enquiryModel;