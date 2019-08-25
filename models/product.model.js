const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
	age: { 
		type: Number, 
		min: 18, max: 65, 
		required: true 
	},
	email: String,
	phonenumber:String,
	address: String,
	city: String
});
 
module.exports = mongoose.model('Product', ProductSchema);



/*
For document modeling, we create a Model (much like a class in document oriented programming), 
and then we produce documents using this Model (like we create documents of a class in OOP). 
All our processing will be done on these "documents", then finally, 
we will write these documents in our database.
*/
