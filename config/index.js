var configValues = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${ configValues.username}:${configValues.password}@ds145168.mlab.com:45168/node-todos`;
    }
}