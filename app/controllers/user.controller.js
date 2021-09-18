const db = require('../models');
const User = db.user;

exports.getAllUsers = (req,res)=>{
    User.findAll()
    .then(data=> {
        if(data.length != 0){
            res.status(200).send(data);
        }else {
            res.status(201).send('No users available');

        } 
    })
    .catch(err=> {
        res.status(500).send(
            {
            message:err.message || 'Not found'
            }
        );
    });
}

exports.getSingleUser = (req,res)=>{
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
    
}

exports.createUser = (req,res)=>{
    const user = {
        user_name: req.body.user_name,
        password: req.body.password,
    }
    await User.create(user)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
    
}

exports.updateUser = (req,res)=>{
    const user = {
        user_name: req.body.user_name,
        password: req.body.password,
    }
    await User.update(
        user, {
        where: { id: req.body.id, }})
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
    
}

exports.deleteUser = (req,res)=>{

    await User.destroy({
        where: {
          id: req.body.id,}})          
          .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
            {
              message: err.message || 'Not Found'
            }
            );
        });
    
}