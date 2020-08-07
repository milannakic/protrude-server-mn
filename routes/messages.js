const express = require("express");
const router = express.Router({ mergeParams: true }); //needed to access the ID inside this router

const { createMessage } = require("../handlers/messages");

//prefix - /api/users/:id/messages
router.route("/").post(createMessage);

module.exports = router;
