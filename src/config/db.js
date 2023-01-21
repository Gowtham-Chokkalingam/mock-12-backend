const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const URI = `mongodb+srv://g:g@cluster0.joheuia.mongodb.net/Grow-Calculator?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (error) {
    console.log("error:", error.message);
    process.exit();
  }
};

module.exports = connectDB;
