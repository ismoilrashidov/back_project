const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Sector = sequelize.define("Sector", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sector_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Sector.associate = (models) => {
        Sector.hasMany(models.Seat, {
            foreignKey: "sector",
            as: "seat",
        });
    };
    return Sector;
};
