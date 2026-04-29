const mongoose = require('mongoose');

const CropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  soilTypes: {
    type: [String],
    required: true
  },
  climates: {
    type: [String],
    required: true
  },
  season: {
    type: String,
    required: true
  },
  plantingTime: {
    startMonth: { type: Number, required: true }, // 1-12
    endMonth: { type: Number, required: true }, // 1-12
    description: { type: String, required: true }
  },
  harvestTime: {
    durationDays: { type: Number, required: true },
    description: { type: String, required: true }
  },
  storage: {
    temperatureC: { type: String, required: true },
    humidityPercent: { type: String, required: true },
    maxDurationDays: { type: Number, required: true },
    methods: { type: [String], required: true },
    description: { type: String, required: true }
  },
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/300?text=Crop'
  }
});

module.exports = mongoose.model('crop', CropSchema);
