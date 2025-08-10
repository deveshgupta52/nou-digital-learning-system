import express from 'express';
import resultModel from '../models/Result.js';
const resultRoute = express.Router();

resultRoute.get('', async (req, res) => {
    const data = await resultModel.find();
    res.json({
        "msg" : "success",
        "data" : data
    });
});

resultRoute.get('/:rollno', async (req, res) => {
    const rollno = req.params.rollno;
    const data = await resultModel.find({
        rollno : rollno
    });
    res.json({
        "msg" : "success",
        "data" : data
    });
});


resultRoute.post('', async (req,res) => {
    const data = await resultModel.create(req.body);
    res.json({
        "msg" : "success",
        "data" : data
    });
});

resultRoute.put('/:rollno', async (req, res) => {
    const data = await resultModel.findOneAndUpdate(
        {
            rollno : req.params.rollno
        },
        req.body,
        {
            new : true
        });

        res.json({
            "msg" : "Updation Successfull",
            "data" : data
        });
});


resultRoute.delete('/:rollno', async (req,res) => {
    await resultModel.findOneAndDelete({
        rollno : req.params.rollno
    });

    res.json({
        "msg" : "Deletion Successfull"
    });
})
export default resultRoute;