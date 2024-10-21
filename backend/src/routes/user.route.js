import express from 'express';
import { test, updatedUser, deleteUser, getUserListings, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../../utils/verifyUser.js';



const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updatedUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id',  getUserListings)
router.get('/:id', verifyToken, getUser)




export default router;