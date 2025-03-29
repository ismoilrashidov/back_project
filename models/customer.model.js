const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Customer.associate = (models) => {
        Customer.hasMany(models.Cart, {
            foreignKey: "customer_id",
            as: "cart",
        });
        Customer.hasMany(models.Customer_card, {
            foreignKey: "customer_id",
            as: "customer_card",
        });
        Customer.hasMany(models.Customer_address, {   
            foreignKey: "customer_id",
            as: "customer_address",
        });
        Customer.belongsTo(models.Gender, {   
            foreignKey: "gender",
            as: "genderrr",
        });
        Customer.belongsTo(models.Lang, {   
            foreignKey: "lang_id",
            as: "lang",
        });
    };
    Customer.beforeSave(async (customer, options) => {
        if (customer.changed("password")) {
            customer.hashed_password = await bcrypt.hash(customer.hashed_password, 10);
        }
    });
    return Customer;
};




