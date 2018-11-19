"use strict";

var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')
  , config = require(path.join(__dirname,'..','config', 'config.json'))[env]
  , db_config    = require('../../config').database
  , sequelize = new Sequelize(db_config.db_name, db_config.db_user, db_config.db_password, db_config.storage, {
    logging: false
  })
  , db        = {}
  ,env = process.env.NODE_ENV || "development"

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

module.exports = lodash.extend({
  sequelize: sequelize,
  Sequelize: Sequelize
}, db);