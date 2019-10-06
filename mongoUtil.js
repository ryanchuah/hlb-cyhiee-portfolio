const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = require("./config/keys").mongoURI

var state = { dbTest: undefined, dbStrapi: undefined }
const client = new MongoClient(url, { useNewUrlParser: true })

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, client) {
            if (err) console.log(err)
            state.dbTest = client.db('test');
            state.dbStrapi = client.db('strapi')
            return callback(err);
        });
    },

    getDbTest: function () {
        return state.dbTest
    },

    getDbStrapi: function () {
        return state.dbStrapi
    }
};
