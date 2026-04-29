const express = require('express');
const router = express.Router();
const { 
    getAllCrops, 
    recommendCrops, 
    getCropById 
} = require('../controllers/cropController');

// @route   GET api/crops
// @desc    Get all crops
// @access  Public
router.get('/', getAllCrops);

// @route   POST api/crops/recommend
// @desc    Get crop recommendations based on criteria
// @access  Public
router.post('/recommend', recommendCrops);

// @route   GET api/crops/:id
// @desc    Get crop by ID
// @access  Public
router.get('/:id', getCropById);

module.exports = router;
