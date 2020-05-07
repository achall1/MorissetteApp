const { Order, CartItem } = require('../models/order');
const {errorHandler} = require('../helpers/dbError')
//need to install sendgrid
// sendgrid for email npm i @sendgrid/mail
//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey('xxxx');

/* all the functions here need testing  */


// create an new order and send email to admin 

exports.create = (req, res) => {
    console.log('CREATE ORDER: ', req.body);
    req.body.order.customer = req.profile;
    
    const order = new Order(req.body.order);
    order.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }
        //send email alert to admin
         order.address
         order.products.length
         order.amount
      /*  const emailData = {
            to: '',
            from: '.com',
            subject: ``,
            html: `
            <p>Customer name:</p>
            <p>Total cars: ${order.length}</p>
            <p>Total price: ${order.amount}</p>
            <p>Login to dashboard to the order in detail.</p>
        `
        };
        */
       // sgMail.send(emailData);
        res.json(data);
    });
};

// find an order using the order-id

exports.orderById = (req, res, next, id) => {
    Order.findById(id)
        .populate('vehicles.vehicle', 'name', 'price')
        .exec((err, order) => {
            if (err || !order) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            req.order = order;
            next();
        });
};
exports.listOrders = (req, res) => {
    Order.find()
        .populate('customer', '_id name address')
        .sort('-created')
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }
            res.json(orders);
        });
};

// retrun the status of the order if its shipped or not 
exports.getStatusValues = (req, res) => {
    res.json(Order.schema.path('status').enumValues);
};

exports.updateOrderStatus = (req, res) => {
    Order.update({ _id: req.body.orderId }, { $set: { status: req.body.status } }, (err, order) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(order);
    });
};
