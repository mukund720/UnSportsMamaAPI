var config = {
    development: {
        //url to be used in link generation
        url: 'http://my.site.com',
        //mysql connection settings
        database: {
            host     : 'localhost',
            database : 'unsportsmama',
            user     : 'root',
            password : 'B560b560@',
            port     : '3306'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3422'
        }
    },
    production: {
        //url to be used in link generation
        url: 'http://my.site.com',
        //mysql connection settings
        database: {
            host     : 'localhost',
            database : 'unsportsmama',
            user     : 'root',
            password : 'B560b560@',
            port     : '3306'
        },
        //server details
        server: {
            host:   '127.0.0.1',
            port:   '3421'
        }
    }
    };
    module.exports = config;