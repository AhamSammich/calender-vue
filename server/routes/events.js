const express = require("express");
const {
    getAllEvents,
    addEvent,
} = require("../controllers/eventsController");

const router = express.Router();

router.get("/", getAllEvents);

router.post("/", addEvent);

module.exports = router;
