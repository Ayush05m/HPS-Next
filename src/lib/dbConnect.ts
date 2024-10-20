import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to DB");
    return;
  }

  try {
      const db = await mongoose.connect(process.env.MONGODB_URI || "", { dbName : "HPS"})
      // console.log(db);
      connection.isConnected = db.connections[0].readyState;
      console.log("DB connected");

  }catch(err) {
      console.log("Error in DB Connect: ", err);
      process.exit(1);
  }
}

export default dbConnect;
