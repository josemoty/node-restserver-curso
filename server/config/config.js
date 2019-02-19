// ==========================================
// Puerto
// ==========================================
process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://moti:admin@cafe-shard-00-00-trqal.mongodb.net:27017,cafe-shard-00-01-trqal.mongodb.net:27017,cafe-shard-00-02-trqal.mongodb.net:27017/test?ssl=true&replicaSet=cafe-shard-0&authSource=admin&retryWrites=true';
}

process.env.URLDB = urlDB;