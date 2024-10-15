const mongoosee = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
const dbConnect = () => {
    try{
        mongoosee.connect(MONGO_URI);
        console.log ('DB connected')
    }   catch (error) {
        console.log ('DB not connected')

    }
}

module.exports = dbConnect;
