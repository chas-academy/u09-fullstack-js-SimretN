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

// Create Listing
export const createListing = async (req, res, next) => {
    try {
        // Ensure the user is authenticated
        if (!req.user) {
            return next(errorHandler(401, 'Unauthorized! You must be logged in to create a listing.'));
        }

        // Attach user reference to the listing
        const listing = await Listing.create({ ...req.body, userRef: req.user.id });
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
};

// Delete Listing
export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
    }

    // Ensure the user is authenticated and authorized
    if (!req.user || req.user.id !== listing.userRef.toString()) {
        return next(errorHandler(403, 'You can only delete your own listings!'));
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('Listing has been deleted!');
    } catch (error) {
        next(error);
    }
};

// Update Listing
export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
        return next(errorHandler(404, 'Listing not found!'));
    }

    // Ensure the user is authenticated and authorized
    if (!req.user || req.user.id !== listing.userRef.toString()) {
        return next(errorHandler(403, 'You can only update your own listings!'));
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
};

// Get a specific Listing
export const getListing = async (req, res, next) => {
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

// Get all Listings with optional filters
export const getListings = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 9;
        const startIndex = parseInt(req.query.startIndex) || 0;

        const filters = {
            name: req.query.searchTerm ? { $regex: req.query.searchTerm, $options: 'i' } : { $exists: true },
            offer: req.query.offer === 'true' ? true : req.query.offer === 'false' ? false : { $in: [false, true] },
            furnished: req.query.furnished === 'true' ? true : req.query.furnished === 'false' ? false : { $in: [false, true] },
            parking: req.query.parking === 'true' ? true : req.query.parking === 'false' ? false : { $in: [false, true] },
            type: req.query.type === 'all' ? { $in: ['sale', 'rent'] } : req.query.type || { $exists: true }
        };

        const sort = req.query.sort || 'createdAt';
        const order = req.query.order === 'asc' ? 1 : -1;

        const listings = await Listing.find(filters)
            .sort({ [sort]: order })
            .limit(limit)
            .skip(startIndex);

        return res.status(200).json(listings);
    } catch (error) {
        next(error);
    }
};

  