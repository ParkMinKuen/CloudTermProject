var Item = require('../model/itemdb');

var itemcontroller = {};

itemcontroller.list = function(req, res){

    Item.find({}).exec(function(err, items){
        if(err){
            console.log(`Error:${err}`);
        }
        else {
            res.render("../views/pages/index", {items: items});
        }
    });
};

itemcontroller.show = function(req, res){
    Item.findOne({_id: req.params.id}).exec(function(err, data){
        if(err){
            console.log(`Error:${err}`);
        }
        else{
            res.render("../views/pages/show", {item1: data});
        }
    })
}

itemcontroller.create = function (req, res) {
    res.render("../views/pages/create");
};

itemcontroller.save = function(req,res){


    var item = new Item(req.body);

    item.save(function (err) {
        if(err){
            console.log(err);
            res.render("../views/pages/create");

        } else{
            console.log("Success");
            res.redirect(`/item/show/${item._id}`);
        }
    });
};

itemcontroller.edit = function (req, res) {
    Item.findOne({_id: req.params.id}).exec(function(err, item) {
        if(err){
            console.log(`Error:${err}`);
        }
        else{
            res.render("../views/pages/edit", {item2: item});
        }
    });

};

itemcontroller.update = function (req, res) {
    Item.findByIdAndUpdate(
        req.params.id, { $set:
                {
                    name : req.body.name,
                    expression : req.body.expression,
                    quantity : req.body.quantity,
                    price : req.body.price}
        },
        {new: true}, function (err, item) {
            if(err){
                console.log(err);
                res.render("../views/pages/edit", {item2: req.body});
            } else{
                res.redirect(`/item/show/${item._id}`);
            }

        });
};

itemcontroller.delete = function(req, res){
    Item.remove({_id:req.params.id}, function(err) {
        if (err){
            console.log(err);
        } else{
            console.log("Item delete");
            res.redirect("/item");
        }
    });
};

module.exports = itemcontroller;