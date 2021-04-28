const express = require("express");
const router = express.Router();
const db = require('../db');

router.get('/', async (req,res,next )=>{
    
    try{
        let results = await db.all();
        res.json(results);
    } catch(e){
        res.sendStatus(500);
    }
});

router.get('/:id', async (req,res,next )=>{
        
    try{
        let results = await db.all();
        res.json(results[0]);
    } catch(e){
        res.sendStatus(500);
    }
});

router.post('/post', async (req,res,next )=>{
    try {
        res.json(await db.post(req.body));
    }catch(e){
        console.log(e);
    }

});

module.exports = router;