var config = {
VERSION: 1,
BUILD: 1,
HOST: '127.0.0.1',
URL: 'http://127.0.0.1',
API_PATH : '/api',
PORT : process.env.PORT || 3000,
DB : {
    mongo: {
        HOST : 'localhost',
        PORT : '27017',
        DATABASE : 'db',
        getConnectionString : function(){
        return 'mongodb://'+ this.HOST +':'+ this.PORT +'/'+ this.DATABASE;
        },
    },
    pg: {
        HOST : 'localhost',
        PORT : '5432',
        DATABASE : 'app_db',
        USER: 'app_user',
        PASS: 'app_pass',
        getConnectionString : function(){
        return "pg://"+this.USER+":"+this.PASS+"@localhost:"+this.PORT+"/"+this.DATABASE;
        },
    },
},
getHTTPUrl : function(){
 return 'http://' + this.HOST + ":" + this.PORT;
}
}
module.exports = config;