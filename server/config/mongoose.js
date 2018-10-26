var mongoose = require('mongoose'),
    testModel = require('../models/testModel');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('test db opened');
  });
    
   testModel.createTestData();
}