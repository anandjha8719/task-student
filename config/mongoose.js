const mongoose = require('mongoose');



const connectDB = async () => {
    const url = 'mongodb://localhost:27017/student';
    try {
        const connection = await mongoose.connect(url);
        console.log('**connected to db**');
    } catch(err){
        console.error('error in connecting to db', err);
        process.exit(1);
    }

}

module.exports = connectDB;