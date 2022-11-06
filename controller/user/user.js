const Waste = require('../../models/Waste');

module.exports.addWaste = async (req, res) => {
    try {
        const newWaste =  new Waste({
            "userId": "636690411797d1b1300873b9",
            "items": req.body.items,
            "slot": req.body.slot,
            "collector": "test-text",
            "location": req.body.location,
            "address": req.body.address
        })

        await newWaste.save();

        res.status(200).json({
            status: true,
            message: "Waste added successfully",
            data: await newWaste.populate('userId', ['name', 'email', 'phone', 'address'])
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
};

module.exports.cancelWaste = async (req, res) => {
    try {
        const waste = await Waste.findOne({_id: req.params.id, status: "Recieved"});
        if(!waste) {
            return res.status(400).json({
                success: false,
                message: "Waste not found with the given id or collector already accepted the request"
            })
        }

        waste.status = "Cancelled";
        await waste.save();

        res.status(200).json({
            status: true,
            message: "Waste cancelled successfully",
            data: await waste.populate('userId', ['name', 'email', 'phone', 'address'])
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
};

module.exports.pendingWastes = async (req, res) => {
    try {
        const wastes = await Waste.find({ status: {$in: ['Pending', 'Cancelled']} }); //{ userId: req.user.id }

        res.status(200).json({
            status: true,
            message: "pending wastes fetched successfully",
            data: wastes
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
};

module.exports.getWaste = async (req, res) => {
    try {
        const waste = await Waste.findOne({ _id: req.params.id }); //{ userId: req.user.id }

        res.status(200).json({
            status: true,
            message: "waste fetched successfully",
            data: waste
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
};

module.exports.history = async (req, res) => {
    try {
        const wastes = await Waste.find(); //{ userId: req.user.id }

        res.status(200).json({
            status: true,
            message: "wastes fetched successfully",
            data: wastes
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
};