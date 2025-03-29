const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define("Gender", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Gender.associate = (models) => {
        Gender.hasMany(models.Human_category, {
            foreignKey: "gender",
            as: "human_gender",
        });
        Gender.hasMany(models.Customer, {
            foreignKey: "gender",
            as: "customer",
        });
    };
    return Gender;
};
