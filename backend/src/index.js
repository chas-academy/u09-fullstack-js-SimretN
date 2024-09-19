import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
 console.log('connected to MongoDB!');

})
.catch((err) => {
  console.log(err);
});

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => { //middleware
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const port = process.env.PORT || 3000; // This should be the only declaration of 'port'
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

/*import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import connectDB from './db/db.js'; // Import the connectDB function

dotenv.config(); // Load environment variables

// Call the function to connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routers for user and auth routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// Error-handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Set the port for the server (Declare only once)
const port = process.env.PORT || 3000; // This should be the only declaration of 'port'

// Basic route to confirm the server is running
app.get('/', (req, res) => {
  res.send('Express Server');
});
*/
// Start the server


