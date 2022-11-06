const Waste = require('../../models/Waste');

module.exports.getRequests = async (req, res) => {

}

module.exports.history = async (req, res) => {
    
}

module.exports.accept = async (req, res) => {
    
}

module.exports.getRequests = async (req, res) => {
    
}

module.exports.getRequests = async (req, res) => {
    
}

module.exports.markCompleted = async (req, res) => {
    try {
        const waste = await Waste.findById(req.body.id);
        if(!waste) {
            return res.status(400).json({
                success: false,
                message: "waste not found with the given id"
            }) 
        }
        if(waste.completion_key != req.body.pin) {
            return res.status(400).json({
                success: false,
                message: "incorrect pin"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
};