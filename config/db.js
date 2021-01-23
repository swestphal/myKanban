const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log('Mongo DB is connected');
    } catch (err) {
        console.log('Error connection DB :', err.message);
        process.exit();
    }
};

module.exports = connectDB;
