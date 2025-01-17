import express from 'express';
import mongoose from 'mongoose';
import router from './routes/api.js';
import {
  MONGODB_CONNECTION,
  PORT,
  MAX_JSON_SIZE,
  URL_ENCODED,
} from './app/config/config.js';

const app = express();

app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));

// MongoDB connection

mongoose
  .connect(MONGODB_CONNECTION, { autoIndex: true })
  .then(() => {
    console.log('Successfully Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB');
  });

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});