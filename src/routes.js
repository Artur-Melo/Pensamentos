const express = require("express");
const usercontoller = require("./controllers/usercontoller");

const router = express.Router();

router.post("/users", usercontoller.createUser);
router.get("/users", usercontoller.findUsers);
router.get("/users/:id", usercontoller.findOne);
router.put("/users/:id", usercontoller.updateUser);
router.post("/users", );

module.exports = router;