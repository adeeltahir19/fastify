const Event = require("../models/Event");

//get all events
const getEvents = async (req, reply) => {
  try {
    const events = await Event.find();
    return events;
  } catch (error) {
    throw error;
  }
};

// //get single event by id
const getSingleEvent = async (req, reply) => {
  try {
    const eventId = req.params.id;
    return await Event.findById(eventId);
  } catch (error) {
    throw error;
  }
};

// //add a new event
const addEvent = async (req, reply) => {
  try {
    const event = new Event(req.body);
    return event.save();
  } catch (error) {
    throw error;
  }
};

// //update an existing event
const updateEvent = async (req, reply) => {
  try {
    const eventId = req.params.id;
    const event = req.body;
    const { ...updatedEvent } = event;
    const update = await Event.findByIdAndUpdate(eventId, updatedEvent);
    return update;
  } catch (error) {
    throw error;
  }
};

// //delete an existing event
const deleteEvent = async (req, reply) => {
  try {
    const eventId = req.params.id;
    return await Event.findByIdAndDelete(eventId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getEvents,
  getSingleEvent,
  addEvent,
  deleteEvent,
  updateEvent,
};
