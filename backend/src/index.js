import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';
import cors from "cors"
// import path from 'path';
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
/*const whitelist = [
  "https://fabiestate.netlify.app",
  "http://localhost:5173"
]*/
/*app.use(cors({
  origin: function(origin,callback) {
    if (whitelist.indexOf(origin)!==-1||!origin){
      callback(null,true)
    }else{
      callback(new Error("not allowed by cors"))
    }
  }
}))*/
app.use(cors({
  origin: "https://fabiestate.netlify.app",
  credentials:true
}));

app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// app.use(express.static(path.join(__dirname, '/frontend/FabiRealestate/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend/FabiRealestate', 'dist', 'index.html'));
// })

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

