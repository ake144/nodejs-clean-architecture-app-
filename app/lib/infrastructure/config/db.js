const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

const connectDB = async (test = false) => {
  if (mongoose.connection.readyState !== 0) {
    console.log("⚠️ Already connected to MongoDB. Skipping reconnect...");
    return;
  }

  let dbURI;
  if (test) {
    console.log("🧪 Using in-memory MongoDB for testing...");
    mongoServer = await MongoMemoryServer.create();
    dbURI = mongoServer.getUri();
  } else {
    dbURI = process.env.MONGO_URI;
  }

  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ Connected to ${test ? 'TEST' : 'PRODUCTION'} database`);
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

const closeDB = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    if (mongoServer) await mongoServer.stop();
    console.log("🔴 Database connection closed.");
  }
};

module.exports = { connectDB, closeDB };
