const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Venue_venuetype = sequelize.define("Venue_venuetype", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        venueId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        venuetypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    Venue_venuetype.associate = (models) => {
        Venue_venuetype.belongsTo(models.Venue, {
            foreignKey: "venueId",
            as: "venue",
        });
        Venue_venuetype.belongsTo(models.Venue_type, {
            foreignKey: "venuetypeId",
            as: "venue_type",
        });
    };
    return Venue_venuetype;
};




