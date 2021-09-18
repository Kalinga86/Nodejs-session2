module.exports = (sequelize, Sequelize) =>{
    const Vehicle = sequelize.define("vehicle", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        vehi_type: {
            type: Sequelize.ENUM('Car', 'Van', 'Bus'),
            defaultValue: "Car",
            allowNull: false,
        },

        status: {
            type: Sequelize.ENUM('Active', 'Condemned'),
            defaultValue: "Active",
        },
    })
    return Vehicle;
}