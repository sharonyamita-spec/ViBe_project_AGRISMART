const Crop = require('../models/Crop');

// Get all crops
exports.getAllCrops = async (req, res) => {
    try {
        const crops = await Crop.find().sort({ name: 1 });
        res.json(crops);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get crop recommendations
exports.recommendCrops = async (req, res) => {
    try {
        const { soilType, climate, season } = req.body;
        
        // Build query object
        let query = {};
        if (soilType) query.soilTypes = { $regex: new RegExp(soilType, 'i') };
        if (climate) query.climates = { $regex: new RegExp(climate, 'i') };
        if (season) query.season = { $regex: new RegExp(season, 'i') };

        const recommendedCrops = await Crop.find(query);
        res.json(recommendedCrops);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get crop by ID
exports.getCropById = async (req, res) => {
    try {
        const crop = await Crop.findById(req.params.id);
        if (!crop) {
            return res.status(404).json({ msg: 'Crop not found' });
        }
        res.json(crop);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Crop not found' });
        }
        res.status(500).send('Server Error');
    }
};
