const express = require('express');
const router = express.Router()
const Creature = require("../Models/creatureModel.js")

router.get("",(req,res)=>{
    Creature.find().exec((err,creatures)=>{
        if(err){res.status(500).send(err)}
        res.send(creatures)
    })
})

router.post("/:name/:creatureType",(req,res)=>{
    let name = req.params.name
    let creatureType = req.params.creatureType
    let creature = new Creature({name:name,creatureType:creatureType})
    creature.save()
    res.send(creature)
})

module.exports = router