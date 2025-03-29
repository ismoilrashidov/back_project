const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Venue_type = sequelize.define("Venue_type", {
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
    Venue_type.associate = (models) => {
        Venue_type.hasMany(models.Venue_venuetype, {
            foreignKey: "venuetypeId",
            as: "venue_venuetypes",
        });
    };
    return Venue_type;
};




