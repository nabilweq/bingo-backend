const Waste = require('../../models/Waste');

module.exports.getRequests = async (req, res) => {
    try {
        const wastes = await Waste.find({ status: "Recieved" });

        return res.status(200).json({
            success: true,
            message: "wastes fetched sussessfully",
            data: wastes
        }) 
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

module.exports.history = async (req, res) => {
    try {
        const wastes = await Waste.find({ status: "Recieved" });

        return res.status(200).json({
            success: true,
            message: "wastes fetched sussessfully",
            data: wastes
        }) 
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

module.exports.accept = async (req, res) => {
    try {
        const waste = await Waste.findOne({_id: req.params.id, status: "Recieved"});
        if(!waste) {
            return res.status(400).json({
                success: false,
                message: "Waste not found with the given id or another collector already accepted the request"
            })
        }

        waste.status = "Pending";
        waste.collector = "Nabeel, 0909"; //req.user.id
        waste.completion_key = Math.floor(100000 + Math.random() * 900000)
        await waste.save();

        res.status(200).json({
            success: true,
            message: "Waste accepted successfully",
            data: await waste.populate('userId', ['name', 'email', 'phone', 'address'])
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports.markCompleted = async (req, res) => {
    try {
        const waste = await Waste.findOne({_id: req.body.id, status: "Pending"});
        if(!waste) {
            return res.status(400).json({
                success: false,
                message: "pending waste not found with the given id"
            }) 
        }
        if(waste.completion_key != req.body.pin) {
            return res.status(400).json({
                success: false,
                message: "incorrect pin"
            })
        }
        waste.status = "Completed"
        await waste.save();

        res.status(200).json({
            success: true,
            message: "Waste completed successfully",
            data: await waste.populate('userId', ['name', 'email', 'phone', 'address'])
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
};