const db = require("../models"); //if the index.js inside models is named differently then it would need to be specified here as "../models/fileName"
const jwt = require("jsonwebtoken");

exports.signin = function () {};

exports.signup = async function (req, res, next) {
  try {
    //create a user
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    //create a token
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl,
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token,
    });
  } catch (err) {
    //if validation fails
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken";
    }
    return next({
      status: 400,
      message: err.message,
    });
  }
};
