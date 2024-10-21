import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
 import { verifyToken } from '../../utils/verifyUser.js'; // Make sure to import your middleware

const router = express.Router();

// Apply verifyToken middleware to routes that need protection
router.post('/create', verifyToken, createListing); // Protected
router.delete('/delete/:id', verifyToken, deleteListing); // Protected
router.post('/update/:id', verifyToken, updateListing); // Protected
router.get('/get/:id', getListing); // Public (if you want to allow anyone to get a specific listing)
router.get('/get', getListings); // Public (if you want to allow anyone to get all listings)

export default router;
