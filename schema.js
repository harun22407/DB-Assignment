const mongoose = require('mongoose');

// Connect to MongoDB instance
mongoose.connect('mongodb://localhost:27017/e-commerce');





// Product Schema
const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  SKU: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
  },
  price: {
    type: Number,
    required: true,
  },
  discount_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});




// ProductCategory Schema
const productCategorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});



// Discount Schema

const discountSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  discount_percent: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});



// ProductInventorySchema

const ProductInventorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  quantity: {
    type: Number,
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});




// Create models for each schema

const Product = mongoose.model('Product', productSchema);
const ProdutCategory = mongoose.model('ProductCategory', productCategorySchema);
const Discount = mongoose.model('Discount', discountSchema);
const ProductInventory = mongoose.model('ProductInventory', ProductInventorySchema);



// Export the models
module.exports = {
    Product,
    ProdutCategory,
    Discount,
    ProductInventory
  };
  