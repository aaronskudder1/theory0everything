var express = require('express'),
    cors = require('cors'),
    logger = require('morgan'),
    ejs  = require('ejs'),
    bodyParser = require('body-parser');

module.exports = function (app, config) {
    // function compile(str, path) {
    //     return stylus(str).set('filename', path);
    // }
    app.set('views', config.rootPath + '/public');
  //  app.set('view engine', 'html');
 // app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'ejs');
    app.use(logger('dev'));
    app.use(bodyParser());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    module.exports.initViewEngine = function (app) {

    };
    app.use(express.static(config.rootPath + '/public'));
    
    app.get('/about', function(req, res) {
        res.render(config.rootPath + '/public/about.ejs');
    });
    app.get('/contact', function(req, res) {
        res.render(config.rootPath + '/public/contact.ejs');
    });
    app.get('/otherBooks', function(req, res) {
        res.render(config.rootPath + '/public/otherBooks.ejs');
    });

};
