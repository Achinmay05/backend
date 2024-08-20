const mongoose = require('mongoose');
const mongooseURI = process.env.MONGO_URI;


async function connectToMongo() {
    try {
        await mongoose.connect(mongooseURI);

        console.log("Connected Successfully !");

    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectToMongo;