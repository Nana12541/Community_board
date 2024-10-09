import { useParams } from 'react-router-dom'

import React, {useState, useEffect} from 'react';
import locationData from '../../../server/data/locations.js'


const getAllLocations = ({data}) => {
    const { id } = useParams()
    const [location, setLocation] = useState({id: 0, name: "", addres: "", city: "", state: "", zip: 0, image: ""})

    useEffect(() => {
        const getLocationById = async () => {
            const response = locationData
            const data = response
            setLocation(data[id - 1])
        }
        getLocationById()
    }, [data, id]);


    return (
        <div className="LocationDetails">
            <main id="location-content" class="location-info">
                <div class="image-container">
                    <img id="image" src={location.image} />
                </div>
                <div class="location-details">
                    <h2 id="Name">{location.name}</h2>
                    <p id="Address: ">{location.address}</p>
                    <p id="City: ">{location.city}</p>
                    <p id="State: ">{location.state}</p>
                    <p id="Zip: ">{location.zip}</p>
                </div>
            </main>
        </div>
    )
}

export default getAllLocations;