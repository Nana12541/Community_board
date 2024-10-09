import { pool } from './database.js'
import './dotenv.js'
import locationData from '../data/locations.js'

const createLocationsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id INTEGER PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            zip INTEGER NOT NULL,
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 locations table created successfully')
    } catch (err) {
        console.error('⚠️ error creating locations table', err)
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable()

    locationData.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO locations (name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
            location.name,
            location.address,
            location.city,
            location.state,
            location.zip,
            location.image,
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err)
                return
            }

            console.log(`✅ ${location.name} added successfully`)
        })
    })
}

seedLocationsTable()