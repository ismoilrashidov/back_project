const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Venue_photo = sequelize.define("Venue_photo", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        venueId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Venue_photo.associate = (models) => {
        Venue_photo.belongsTo(models.Venue, {
            foreignKey: "venueId",
            as: "venue",
        });
    };
    return Venue_photo;
};




