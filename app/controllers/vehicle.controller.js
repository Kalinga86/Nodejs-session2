const db=require('../models');
const Vehicle=db.vehicle;

exports.getAllVehicles=(req,res)=>{
    //console.log(req);  --get req details
    //res.status(200).send('getAllUsers'); --test req

  // User.findAll({}).then({}).catch({})
  Vehicle.findAll().then(data=>{
        if(data.length !=0){
            res.status(200).send(data);
        }else{
            res.status(404).send('Vehicle are Empty');
        }
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'Not found'
        });

    });
}

exports.getSingleVehicle=(req,res)=>{
    const vehi_id = req.params.vehi_id;

    Vehicle.findByPk(vehi_id)
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

exports.createVehicle=async (req,res)=>{
    const vehicle = {
        vehi_type: req.body.vehi_type,
        status: req.body.status,
    }
    await Vehicle.create(vehicle)
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

exports.updateVehicle= async(req,res)=>{
    const vehicle = {
        vehi_type: req.body.vehi_type,
        status: req.body.status,
    }
    await Vehicle.update(
        vehicle, {
        where: { vehi_id: req.body.vehi_id, }})
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

exports.deleteVehicle= async(req,res)=>{

    await Vehicle.destroy({
        where: {
            vehi_id: req.body.vehi_id,}})          
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