const db = require("../models"); //if the index.js inside models is named differently then it would need to be specified here as "../models/fileName"

exports.createMessage = async function (req, res, next) {
  try {
    let message = await db.Message.create({
      text: req.body.text,
      user: req.params.id, // route "/api/users/:id/messages" will be created and id can be get from there
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.messages.push(message.id);
    await foundUser.save();
    let foundMessage = await db.Message.findById(message._id).populate("user", {
      username: true,
      profileImageUrl: true,
    });
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

exports.getMessage = async function (req, res, next) {};

exports.deleteMessage = async function (req, res, next) {};
