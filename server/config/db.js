const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.set({ strict: true, strictQuery: false });
  const conn = await mongoose.connect(process.env.MONGO_DB);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;