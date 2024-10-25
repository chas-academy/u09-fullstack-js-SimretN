/*import Listing from '../models/listing.model.js';
import { errorHandler } from '../../utils/error.js';



export const createListing = async (req, res, next) => {
    try {
      const listing = await Listing.create(req.body);
      return res.status(201).json(listing);
    } catch (error) {
      next(error);
    }
  };
  
  
  export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
  
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
  
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only delete your own listings!'));
    }
  
    try {
      await Listing.findByIdAndDelete(req.params.id);
      res.status(200).json('Listing has been deleted!');
    } catch (error) {
      next(error);
    }
  };

  export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only update your own listings!'));
    }
  
    try {
      const updatedListing = await Listing.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedListing);
    } catch (error) {
      next(error);
    }
  };*/

  /*export const getListing = async (req, res, next) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
      }
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  };*/

  /*export const getListing = async (req, res, next) => {
    const listingId = req.params.id;
    
    if (!listingId) {
      return next(errorHandler(400, 'Listing ID is required.'));
    }
  
    try {
      const listing = await Listing.findById(listingId);
      if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
      }
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  };
  

  export const getListings = async (req, res, next) => {
    try {
      const limit = parseInt(req.query.limit) || 9;
      const startIndex = parseInt(req.query.startIndex) || 0;
      let offer = req.query.offer;
  
      if (offer === undefined || offer === 'false') {
        offer = { $in: [false, true] };
      }
  
      let furnished = req.query.furnished;
  
      if (furnished === undefined || furnished === 'false') {
        furnished = { $in: [false, true] };
      }
  
      let parking = req.query.parking;
  
      if (parking === undefined || parking === 'false') {
        parking = { $in: [false, true] };
      }
  
      let type = req.query.type;
  
      if (type === undefined || type === 'all') {
        type = { $in: ['sale', 'rent'] };
      }
  
      const searchTerm = req.query.searchTerm || '';
  
      const sort = req.query.sort || 'createdAt';
  
      const order = req.query.order || 'desc';
  
      const listings = await Listing.find({
        name: { $regex: searchTerm, $options: 'i' },
        offer,
        furnished,
        parking,
        type,
      })
        .sort({ [sort]: order })
        .limit(limit)
        .skip(startIndex);
  
      return res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  };*/
  import Listing from '../models/listing.model.js';
import { errorHandler } from '../../utils/error.js';

// Create a new listing
export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

// Delete a listing
export const deleteListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    // Check if the listing exists
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!')); // Return error if not found
    }

    // Check if the user owns the listing
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only delete your own listings!')); // Unauthorized if not owned by user
    }

    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    next(error);
  }
};

// Update a listing
export const updateListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    // Check if the listing exists
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!')); // Return error if not found
    }

    // Check if the user owns the listing
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, 'You can only update your own listings!')); // Unauthorized if not owned by user
    }

    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing); // Return updated listing
  } catch (error) {
    next(error);
  }
};

// Get a single listing
export const getListing = async (req, res, next) => {
  const listingId = req.params.id;
  
  if (!listingId) {
    return next(errorHandler(400, 'Listing ID is required.')); // Added this check for missing ID
  }

  try {
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    res.status(200).json(listing); // Return the found listing
  } catch (error) {
    next(error);
  }
};

// Get all listings with filters and pagination
export const getListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9; // Set default limit
    const startIndex = parseInt(req.query.startIndex) || 0; // Set default startIndex
    let offer = req.query.offer;

    if (offer === undefined || offer === 'false') {
      offer = { $in: [false, true] }; // If offer is not defined, allow both true/false
    }

    let furnished = req.query.furnished;

    if (furnished === undefined || furnished === 'false') {
      furnished = { $in: [false, true] }; // If furnished is not defined, allow both true/false
    }

    let parking = req.query.parking;

    if (parking === undefined || parking === 'false') {
      parking = { $in: [false, true] }; // If parking is not defined, allow both true/false
    }

    let type = req.query.type;

    if (type === undefined || type === 'all') {
      type = { $in: ['sale', 'rent'] }; // If type is not defined, allow both sale and rent
    }

    const searchTerm = req.query.searchTerm || ''; // Default search term empty
    const sort = req.query.sort || 'createdAt'; // Default sort by createdAt
    const order = req.query.order || 'desc'; // Default order descending

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: 'i' }, // Case-insensitive search
      offer,
      furnished,
      parking,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings); // Return the found listings
  } catch (error) {
    next(error);
  }
};

  