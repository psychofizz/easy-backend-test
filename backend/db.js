const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});


async function initDb() {
    const client = await pool.connect();
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS example (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL
            )
        `);
        console.log("Database initialized successfully");
    } catch (error) {
        console.error("Error initializing database:", error);
    } finally {
        client.release();
    }
}

initDb();

module.exports = pool;
