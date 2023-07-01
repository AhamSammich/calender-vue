const Event = require("../models/eventModel");

const getAllEvents = async (_, res) => {
  try {
    const allEvents = await Event.find({}).sort({ createdAt: -1 });
    res.status(200).json(allEvents);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addEvent = async (req, res) => {
  const eventDetails = req.body;
  try {
    const newEvent = await Event.create({
      ...eventDetails,
      userId: "test-user"  // current authenticated user
    });
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllEvents,
  addEvent,
};
