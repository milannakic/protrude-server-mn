const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxLength: 280,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", //has to be capital "U" for User, same as what is exported from the user model
  },
});

messageSchema.pre("remove", async function (next) {
  //cannot be arrow function as we need the correct value for "this"
  try {
    //find a user
    let user = await User.findById(this.user);
    //remove the message by id from the user's array/list
    user.messages.remove(this.id);
    //save the change
    await user.save();
    //return next
    return next();
  } catch (err) {
    return next(err);
  }
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
