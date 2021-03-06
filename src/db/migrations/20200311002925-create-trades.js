'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buyValue: {
        type: Sequelize.FLOAT
      },
      sellValue: {
        type: Sequelize.FLOAT
      },
      exchangeBuy: {
        type: Sequelize.STRING
      },
      exchangeSell: {
        type: Sequelize.STRING
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trades');
  }
};