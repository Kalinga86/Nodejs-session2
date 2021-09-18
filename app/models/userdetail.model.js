module.exports = (sequelize, Sequelize) =>{
    const Userdetail = sequelize.define("userdetail", {

        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },

        name_en: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        name_si: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        name_ta: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        dob: {
            type: Sequelize.DATE,
        },

        salary: {
            type: Sequelize.DOUBLE,
        },

        special_req: {
            type: Sequelize.BOOLEAN,
        },
    })

    return Userdetail;

}