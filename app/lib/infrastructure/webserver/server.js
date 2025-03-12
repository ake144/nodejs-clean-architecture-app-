require('dotenv').config();

const express = require('express');
const { connectDB } = require('../../infrastructure/config/db');
const UserRoutes = require('../../../interfaces/routes/userRoutes');

const app = express();

if (process.env.NODE_ENV !== 'test') {
    (async () => {
        await connectDB();
    })();
}

app.use(express.json());
app.use('/api/users', UserRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = { app, server }; // Export both app and server
