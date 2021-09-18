module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define("role", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        rolename: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        status: {
            type: Sequelize.ENUM('ACTIVE','INACTIVE'),
            defaultValue: "ACTIVE",
        },
    })
    return Role;
}