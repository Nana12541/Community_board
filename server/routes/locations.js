import express from 'express'
import LocationsController from '../controllers/locations.js'
// import controllers for events and locations

const router = express.Router()

// define routes to get events and locations
router.get('/', LocationsController.getLocations)

router.get('/:locationId', (req, res) => {
    const locationId = req.params.locationId;
    LocationsController.getLocationById(locationId)
    .then(location => res.status(200).json(location))
    .catch(error => res.status(500).json({ error: error.message }));
})

export default router