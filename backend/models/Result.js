import mongoose, { mongo } from "mongoose";

const resultSchema = mongoose.Schema({
    rollno : {
        type : Number,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    testName : {
        type : String,
        required : true
    },

    totalMark : {
        type : Number,
        required : true
    },

    getMark : {
        type : Number,
        required : true
    },

    examDate : {
        type : Date,
        default : Date.now
    }
});

const resultModel = mongoose.model('result', resultSchema);
export default resultModel;