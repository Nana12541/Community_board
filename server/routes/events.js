import express from 'express'
// import controllers for events and locations
import EventsController from '../controllers/events.js'

const router = express.Router()

// define routes to get events and locations
router.get('/', EventsController.getEvents)

router.get('/:eventId', (req, res) => {
    const eventId = req.params.eventId;
    EventsController.getEventById(eventId)
    .then(event => res.status(200).json(event))
    .catch(error => res.status(500).json({ error: error.message }));
})

export default router