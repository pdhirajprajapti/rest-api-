const express=require("express");
const router=new express.Router();



const MensBiodata=require('../models/mens');






// we will handle post request
router.post("/mens", async (req, res) => {
    try {
       const addingMensDetail= new MensBiodata(req.body)
         console.log(req.body);
      const insertMens=  await addingMensDetail.save();
      res.status(201).send(insertMens);
    } catch (e){
        res.status(400).send(e);
    }      
})

// we will handle get request in api
router.get("/mens", async (req, res) => {
    try {
      const getMens=await MensBiodata.find().sort({"_id":1});
      res.send(getMens);
    } catch (e){
        res.status(400).send(e);
    }      
})

// we will handle get request in api for individual
router.get("/mens/:id", async (req, res) => {
    try {
        const _id=req.params.id;
      const updateMen=await MensBiodata.findById(_id);
      res.send(updateMen);
    } catch (e){
        res.status(400).send(e);
    }      
})

// we will handle patch request in api for individual
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id=req.params.id;
      const getMen=await MensBiodata.findByIdAndUpdate(_id, req.body, {new:true});
      res.send(getMen);
    } catch (e){
        res.status(500).send(e);
    }      
})

// we will handle delete request in api for individual
router.delete("/mens/:id", async (req, res) => {
    try {
       
      const deleteMen=await MensBiodata.findByIdAndDelete(req.params.id);
      res.send(deleteMen);
    } catch (e){
        res.status(500).send(e);
    }      
})

module.exports=router;