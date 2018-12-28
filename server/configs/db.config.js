var config = {
    port     : 27017,
    mongoose : {
        uri: 'mongodb://localhost/notes_app',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        } 
    }
};

module.exports = config;