module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        password: {
            type: Sequelize.STRING(30),
            allowNull: false,
            unique: true,
        },
        status: {
            type: Sequelize.STRING,
            unique: true,
        },
    })
    return User;
}