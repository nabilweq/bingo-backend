const Waste = require('../../models/Waste');

module.exports.addWaste = async (req, res) => {
    try {
        const newWaste =  new Waste({
            "userId": "636690411797d1b1300873b9",
            "category": req.body.category,
            "no_of_bins": req.body.no_of_bins,
            "slot": req.body.slot,
            "collector": "test-text"
            
        })

        await newWaste.save();

        res.status(200).json({
            status: true,
            message: "Waste added successfully",
            data: await newWaste.populate('userId', ['name', 'email', 'phone'])
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}