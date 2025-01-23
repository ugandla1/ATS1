const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        console.log('DB_CONNECTION_STRING:', process.env.DB_CONNECTION_STRING);

        await mongoose.connect(process.env.DB_CONNECTION_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to monngoDB');
    }catch(error){
        console.error('Error Connecting to MongoDb', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;