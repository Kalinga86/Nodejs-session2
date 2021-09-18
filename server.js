const express=require('express');
const cors=require('cors');
const cookieparser=require('cookie-parser');
const db=require("./app/models");
const userRoute=require("./app/routes/user.route");
const roleRoute=require("./app/routes/role.route");
const vehicleRoute=require("./app/routes/vehicle.route");
const udetailRoute=require("./app/routes/userdetail.route");

const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieparser());

db.sequelize.sync({force:true})
.then(()=>{
    console.log(`Database created successfully`);
})


app.use('/user',userRoute)
app.use('/role',roleRoute)
app.use('/udetail',udetailRoute)
app.use('/vehicle',vehicleRoute)

const PORT =3003;

app.listen(PORT,()=>{
console.log(`server is running ${PORT}`);
});