import express from 'express';
import enquiryModel from '../models/Enquiry.js';
const enquiryRoute = express.Router();


enquiryRoute.get('', async (req,res) => {
    let data = await enquiryModel.find().sort({_id: -1});
    res.json(data);
});

enquiryRoute.get('/count', async (req,res) => {
  let EqCount = await enquiryModel.countDocuments();
  res.json({
    "msg" : "success",
    "count" : EqCount
  });
})


enquiryRoute.get('/:id', async (req, res) => {
    const data = await enquiryModel.find({
        email : req.params.id
    });
    res.json(data);
});

enquiryRoute.post('', async (req, res) => {
    const data = await enquiryModel.create(req.body);
    res.json(data);
});

enquiryRoute.put('/:id', async (req,res) => {
    const data = await enquiryModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(data);
})


enquiryRoute.delete('/:id', async (req, res) => {
    await enquiryModel.findOneAndDelete({
        email : req.params.id
    });
    res.json({
        "msg" : "success"
    });
});



export default enquiryRoute;


