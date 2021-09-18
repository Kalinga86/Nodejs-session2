const dbConfig = require ("../config/db.config");
const Sequelize = require ("sequelize");

const sequelize = new Sequelize (dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorAliases:false,

    pool: {
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
        }
    }
); 

// Initiallize DB
const db  = {};

// Sequelizing
db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize 
    .authenticate()
    .then(() => {
        console.log('Connections has been eshtablished successfully'); 
    })
    .catch(err => {
        console.error('Unable to connect to the database', err);
    })

    db.user = require("./user.model")(sequelize, Sequelize);
    db.role = require("./role.model")(sequelize, Sequelize);
    db.userdetail = require("./userdetail.model")(sequelize, Sequelize);
    db.vehicle = require("./vehicle.model")(sequelize, Sequelize);

    // Many to many relationship (User-Role)
    db.user.belongsToMany(db.role,{
        through: "user_role",
        as: "roles",
        foreignKey: "role_id",
    });

    db.user.belongsToMany(db.user,{
        through: "user_role",
        as: "users",
        foreignKey: "user_id",
    });

    // One to many relationship
    db.user.hasMany(db.vehicle);
    db.vehicle.belongsTo(db.user);

    // One to one relationship
    db.user.hasOne(db.userdetail,{});
    db.userdetail.belongsTo(db.user);



    module.exports = db;