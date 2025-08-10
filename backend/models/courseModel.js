import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    courseCode : {
        type : String,
        unique : true,
        required : true
    },
    
    courseName : {
        type : String,
        required : true
    },

    Duration : {
        type : String
    }
});

const courseModel = mongoose.model('course', courseSchema);
export default courseModel;