//getAllEvents, getEventById

import { useParams } from 'react-router-dom'

import React, {useState, useEffect} from 'react';

const getAllLocations = ({data}) => {
    const { id } = useParams()
    const [event, setEvent] = useState({id: 0, title: "", date: "", description: ""})


    useEffect(() => {
        const getEventById = async () => {
            const response = await fetch(`/event`)
            const data = await response.json()
            setEvent(data[id - 1])
        }
        getEventById()
    }, [data, id]);


    return (
        <div className="GiftDetails">
            <main id="gift-content" class="gift-info">
                <div class="image-container">
                    <img id="image" src={event.image} />
                </div>
                <div class="gift-details">
                    <h2 id="Title">{event.title}</h2>
                    <p id="Date: ">{'Date: ' + event.date}</p>
                    <p id="Description: ">{event.description}</p>
                </div>
            </main>
        </div>
    )
}

export default getAllLocations