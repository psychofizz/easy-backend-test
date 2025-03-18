const express = require('express');
const pool = require('./db');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello, Node.js Express Docker Server with PostgreSQL!</h1>');
});

app.get('/data', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM example');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});
