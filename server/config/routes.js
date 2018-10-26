var testCtrl = require('../controllers/testCtrl');

module.exports = function (app) {

    app.get('/api/test', testCtrl.getTest);
    app.get('/api/test/:id', testCtrl.getTestById);
    app.post('/api/addTest', testCtrl.addTest);

//    app.get('/partials/*', function (req, res) {
//        res.render('../../public/app/' + req.params[0]);
//     //   res.render('../../public/app/');
//    });

    app.all('/api/*', function (req, res) {
        res.send(404);
    });
    app.get('*', function (req, res) {
        res.render('index');
    });
};
