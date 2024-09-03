import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
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

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);










const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});