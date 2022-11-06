const Waste = require('../models/Waste')

module.exports.getOrderId = async () => {
    const waste = await Waste.findOne().sort({_id: -1})

    if(waste) {
        const id = parseInt(waste.orderId.split('-')[1]);
        //console.log(id)
        return id+1;
    } else {
        return 1;
    }
}