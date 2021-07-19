const db = require('../db');
const { DataTypes, Model } = require('sequelize');
class Restaurant extends Model {}

Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine:  DataTypes.STRING,
}, {
    sequelize: db,
    timestamps: false,
});

module.exports = Restaurant;