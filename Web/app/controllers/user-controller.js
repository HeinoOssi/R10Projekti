const db = require('../models');
const User = db.user;

// Adds new data to the database
exports.addNewData =(req, res)=>{
    User.create({
        temperature: req.body.temperature,
        date: req.body.date
    }). catch(err => {
        res.status(500).send({message: err.message});
    })
    res.send({message: "Data added successfully"});

}

// Gets all items from the databases
exports.getAllData =(req,res)=>{
    User.findAll({
        attributes: ['idProjekti', 'temperature', 'date']
    }).then((users)=>{
        res.status(200).send(users);
    });
}

// Gets all data by the idProjekti
exports.getDataById = (req,res) => {
    User.findOne({
        where: {idProjekti: req.params.id}
    }).then((user)=>{
        res.status(200).send(user);
    });
}

// Gets all data by given date
exports.getDataByDate = (req,res)=>{
    User.findOne({
        where: {date: req.params.date}
    }).then((user)=>{
        res.status(200).send(user);
    })
}