// server.js
const express = require('express');
const sequelize = require('./models').sequelize;
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/reservations', reservationRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}🔥🔥🔥🔥`);
  });
});
