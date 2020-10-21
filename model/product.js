const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Product model
const ProductSchema = new Schema({
  //owner of product
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  product_name: {
    type: String,
  },
  product_category: {
    type: String,
  },
  product_brand: {
    type: String,
  },
  price: {
    type: Number,
  },
  product_quantity: {
    type: String,
  },
  product_image: {
    type: String,
  },
  product_category_image: {
    type: String,
  },
  product_brand_image: {
    type: String,
  },
  product_category_status: {
    type: String,
  },
  product_brand_status: {
    type: String,
  },
  
 
});

module.exports = Product = mongoose.model("products", ProductSchema);