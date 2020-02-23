import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: String,
    brand: String,
    sizes: [Schema.Types.Number],
    price: Schema.Types.Number
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;