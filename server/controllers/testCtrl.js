var TestDatas = require('mongoose').model('TestData');

exports.getTest = function (req, res) {
    TestDatas.find({}).exec(function (err, collection) {
        res.send(collection);
    });
    var title ="Title";
};

exports.getTestById = function (req, res) {
    TestDatas.findOne({
        _id: req.params.id
    }).exec(function (err, tests) {
        res.send(tests);
    });
};

exports.addTest = function (req, res) {
    var testDatas = new TestDatas({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    testDatas.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving  ' + err;
            res.render('newnote', {
                title: 'New Test (error)',
                message: errMsg
            });
        } else {
            console.log('Test was saved!');
            res.redirect(301, '/');
        }
    });
};
