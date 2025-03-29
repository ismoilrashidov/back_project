const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Ticket_status = sequelize.define("Ticket_status", {
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
    Ticket_status.associate = (models) => {
        Ticket_status.hasMany(models.Ticket, {
            foreignKey: "status_id",
            as: "ticket",
        });
    };
    return Ticket_status;
};




