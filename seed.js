import mongoose from "mongoose";
import userModel from "./models/user-model.js"; 
import { config } from "dotenv";
config();  


const users = [
  { name: "aman" },
  { name: "chaman" },
  { name: "nitin" },
  { name: "kamlesh" },
  { name: "raj" },
  { name: "vikas" },
  { name: "arjun" },
  { name: "ankit" },
  { name: "deepak" },
  { name: "sachin" }
];

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Connected to MongoDB");

    // Insert new users
    await userModel.insertMany(users);
    console.log(" Seed data inserted successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedUsers();
