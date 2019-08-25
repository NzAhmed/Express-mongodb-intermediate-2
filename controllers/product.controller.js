const Product = require('../models/product.model');

function create (req, res)  {
    const product = new Product( req.body );
    product.save(function(err,data){
        if(err){
            res.send("error in saving!");
        } 
        else {
            res.send(data);
        }    
    });
};

function get(req, res)
{
    Product.findById(req.params.id, function (err, product) {
        if(err){
            res.send("error !!!");
        }
        else {
            res.send(product);
        }
    });
};

function list (req, res) {
    Product.find(function(err, data){
        if(err) {
            res.send("error !!!!")
        }
        else {
          res.send(data);
        }
   });
};

function update(req, res){
    Product.findByIdAndUpdate(req.params.id, req.body, function(err, data){
        if(err) {
            res.send("error !!!");
        }
        else {
            res.send("updated");
        }
    });
};

function remove(req, res) {
    Product.findByIdAndRemove(req.params.id, function (err, data) {
        if(err){
            res.send("error !!!");
        } else {
            res.send("deleted");
        }
    });
};

module.exports = { get, list, create, update, remove };
