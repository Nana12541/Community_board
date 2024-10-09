import pg from 'pg'

const config = {
    user: 'postgres',
    password: 'eJgmyQJFAurRklAcvempeKpGOSdhgigN',
    host: 'junction.proxy.rlwy.net',
    port: 53005,
    database: "railway"
}

export const pool = new pg.Pool(config)