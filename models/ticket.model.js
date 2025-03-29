const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        service_fee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ticket_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    Ticket.associate = (models) => {
        Ticket.hasMany(models.Cart_item, {
            foreignKey: "ticket_id",
            as: "cart_item",
        });
        Ticket.belongsTo(models.Event, {
            foreignKey: "event_id",
            as: "event",
        });
        Ticket.belongsTo(models.Seat, {
            foreignKey: "seat_id",
            as: "seat",
        });
        Ticket.belongsTo(models.Ticket_status, {
            foreignKey: "status_id",
            as: "ticket_status",
        });
        Ticket.belongsTo(models.Ticket_type, {
            foreignKey: "ticket_type_id",
            as: "ticket_typee",
        });
    };
    return Ticket;
};




