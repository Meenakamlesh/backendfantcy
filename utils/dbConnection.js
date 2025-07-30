import mongoose from "mongoose";

const connectDB  = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected Successfully!");
    } catch (error) {
        console.log("Failed to connect mongoDB");
        process.exit(1)
    }
}

export default connectDB;