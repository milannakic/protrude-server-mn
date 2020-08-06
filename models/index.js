const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise; //needed for ES2017 methods

const uri = process.env.DATABASEURL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose.connect(uri, options).then(
  () => {},
  (err) => {
    console.log(err);
    var d = Date(Date.now()).toString();
    console.log.call(console, d);
  }
);

/* mongoose.connect(uri, {
  keepAlive: true,
  useMongoClient: true,
}); */

module.exports.User = require("./user");
