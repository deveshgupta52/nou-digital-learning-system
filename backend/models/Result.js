import mongoose, { mongo } from "mongoose";

const resultSchema = mongoose.Schema({
    rollno : {
        type : Number,
        required : true,
        unique : true
    },

    courseName : {
        type : String,
        required : true
    },

    totalMark : {
        type : Number,
        required : true
    },

    getMark : {
        type : Number
    },

    examDate : {
        type : String,
    }
});

const resultModel = mongoose.model('result', resultSchema);
export default resultModel;