// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
//  id
id: {
  type: DataTypes.INTEGER, 
  allowNull: false, 
  primaryKey: true, 
  autoIncrement: true
}, 

// product_name
product_name: {
  type: DataTypes.STRING, 
  allowNull: false, 
}, 

// price
price: {
  type: DataTypes.DECIMAL, 
  allowNull: false, 
  // Validates that the value is a decimal

}, 

// stock
stock: {
  type: DataTypes.INTEGER, 
  allowNull: false, 
// Set a default value of 10
// Validates that the value is numeric
}, 
category_id: {
  type: DataTypes.INTEGER, 
  // References the category model's id
}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
