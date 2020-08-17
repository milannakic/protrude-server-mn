const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const uri = process.env.DATABASEURL;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: true,
  keepAlive: true,
  poolSize: 10,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4, // Use IPv4, skip trying IPv6
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => console.log("> Successfully connected to DB"))
  .catch((err) => console.log(err));

module.exports.User = require("./user");
module.exports.Message = require("./message");
