const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}
connectDB()
module.exports = connectDB