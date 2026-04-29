const mongoose = require('mongoose');
const Crop = require('./models/Crop');
const connectDB = require('./config/db');

const seedCrops = [
    {
        name: "Wheat",
        description: "A worldwide staple food crop. Needs cool, moist weather during growth and warm, dry weather for maturity.",
        soilTypes: ["loamy", "clay", "well-drained"],
        climates: ["temperate", "subtropical"],
        season: "Winter",
        plantingTime: {
            startMonth: 10,
            endMonth: 11,
            description: "Plant in late autumn before the ground freezes."
        },
        harvestTime: {
            durationDays: 120,
            description: "Harvest in early to mid-summer when stalks are yellow and dry."
        },
        storage: {
            temperatureC: "10-15",
            humidityPercent: "60-70",
            maxDurationDays: 365,
            methods: ["Silo storage", "Grain bins", "Jute bags in cool dry place"],
            description: "Ensure grains are dried to about 12% moisture before storage to prevent mold."
        },
        imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Rice",
        description: "A primary staple for over half the world's population. Requires high water availability.",
        soilTypes: ["clay", "loamy", "silty"],
        climates: ["tropical", "subtropical"],
        season: "Monsoon",
        plantingTime: {
            startMonth: 6,
            endMonth: 7,
            description: "Plant at the onset of the monsoon season."
        },
        harvestTime: {
            durationDays: 150,
            description: "Harvest when the panicles turn yellow and moisture content is around 20%."
        },
        storage: {
            temperatureC: "15-20",
            humidityPercent: "65-75",
            maxDurationDays: 180,
            methods: ["Paddy silos", "Gunny bags"],
            description: "Dry paddy to 14% moisture. Store away from ground moisture using pallets."
        },
        imageUrl: "https://images.unsplash.com/photo-1536604673641-f761f03f39a0?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Corn",
        description: "A versatile crop used for food, feed, and industrial products. Requires plenty of sunlight.",
        soilTypes: ["loamy", "well-drained sandy loam"],
        climates: ["temperate", "tropical", "subtropical"],
        season: "Summer",
        plantingTime: {
            startMonth: 4,
            endMonth: 5,
            description: "Plant when soil temperature reaches at least 10°C (50°F)."
        },
        harvestTime: {
            durationDays: 90,
            description: "Harvest when husks are dry and kernels dent."
        },
        storage: {
            temperatureC: "5-10",
            humidityPercent: "60",
            maxDurationDays: 240,
            methods: ["Corn cribs", "Grain bins with aeration"],
            description: "Dry kernels to 15% moisture or below for safe long-term storage."
        },
        imageUrl: "https://images.unsplash.com/photo-1601646274028-17b5f540f28e?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Tomato",
        description: "A widely cultivated edible fruit. highly sensitive to frost and waterlogging.",
        soilTypes: ["loamy", "sandy loam", "well-drained"],
        climates: ["temperate", "tropical", "subtropical"],
        season: "Spring/Summer",
        plantingTime: {
            startMonth: 3,
            endMonth: 4,
            description: "Start seeds indoors, transplant after the last frost."
        },
        harvestTime: {
            durationDays: 80,
            description: "Harvest when fruit is firm and fully colored."
        },
        storage: {
            temperatureC: "12-15",
            humidityPercent: "85-90",
            maxDurationDays: 14,
            methods: ["Cold storage", "Ventilated crates"],
            description: "Do not store below 10°C (50°F) to avoid chilling injury and loss of flavor."
        },
        imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Potato",
        description: "A starchy tuber crop. Best grown in cool climates with loose, well-drained soil.",
        soilTypes: ["sandy loam", "loamy", "loose"],
        climates: ["cool temperate", "temperate"],
        season: "Spring",
        plantingTime: {
            startMonth: 3,
            endMonth: 4,
            description: "Plant seed potatoes when soil can be worked in early spring."
        },
        harvestTime: {
            durationDays: 100,
            description: "Harvest after vines have died back."
        },
        storage: {
            temperatureC: "4-7",
            humidityPercent: "90-95",
            maxDurationDays: 150,
            methods: ["Root cellars", "Dark, cool, well-ventilated bins"],
            description: "Keep strictly in the dark to prevent greening (solanine toxicity). Cure for a week at 15°C before cold storage."
        },
        imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600&auto=format&fit=crop"
    }
];

const seedDatabase = async () => {
    try {
        await connectDB();
        await Crop.deleteMany(); // Clear existing
        console.log('Existing crops removed');
        await Crop.insertMany(seedCrops);
        console.log('Seed crops inserted successfully');
        process.exit();
    } catch (error) {
        console.error('Error with seeding data: ', error);
        process.exit(1);
    }
};

seedDatabase();
