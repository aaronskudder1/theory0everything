var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
//var rootPath = path.normalize(./server/views');
module.exports = {
    development: {
        db: 'mongodb://localhost:27017/test',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://aaronskudder:Beli3l33@ds125053.mlab.com:25053/aaronskudder',
        port: process.env.PORT || 80
    }
};
