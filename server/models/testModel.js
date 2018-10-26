var mongoose = require('mongoose');

var testSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

var TestData = mongoose.model('TestData', testSchema);

function createTestData() {
    TestData.find({}).exec(function (err, collection) {
        if (collection.length === 0 ){
                TestData.create({
                    firstName: 'Aaron',
                    lastName: 'Skudder'
                });
                TestData.create({
                    firstName: 'Lan',
                    lastName: 'Skudder'
                });
                    console.log('test data written to mongo');
            };
    });
};

exports.createTestData = createTestData;
