import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGO_URI ?? "mongodb://localhost:27017/mydatabase";

export async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    process.exit(1);
  }
}

export async function disconnectDatabase(): Promise<void> {
  try {
    await mongoose.disconnect();
    console.log("✅ Database disconnected successfully!");
  } catch (error) {
    console.error("❌ Error disconnecting from the database:", error);
  }
}
