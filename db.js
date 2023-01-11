const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/ZASNotebook";

const connectToMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo Succesfully");
  });
};

module.exports = connectToMongo;
