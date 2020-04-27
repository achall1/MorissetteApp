const Customer = require('../models/customer')

exports.customerById = (req,res,next,id) =>{
    Customer.findById(id).exec((err,customer)=>{
        // if customer is not found retrun error
        if(err || !customer){
            return res.status(400).json({
                error:"customer not found"
            })
        }
        // return customer info go to the next page
        req.profile = customer;
        next();
    })
}
// this method add orders to customer(Role=0) buyHistoty Array
exports.addOrderToUserHistory = (req, res, next) => {
    let history = [];

    req.body.order.products.forEach(item => {
        history.push({
            _id: item._id,
            model: item.model,
            make: item.make,
            year: item.year,
            mileage: item.milage,
            price: item.price,
            transaction_id: req.body.order.transaction_id,
            amount: req.body.order.amount
        });
    });

    User.findOneAndUpdate({ _id: req.profile._id }, { $push: { history: history } }, { new: true }, (error, data) => {
        if (error) {
            return res.status(400).json({
                error: 'Could not update customers purchase history'
            });
        }
        next();
    });
};

exports.purchaseHistory = (req, res) => {
    Order.find({ customer: req.profile._id })
        .populate('customer', '_id name')
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(orders);
        });
};
