import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: String,
    brand: String,
    sizes: [Schema.Types.Number],
    price: Schema.Types.Number,
    size: {
        width: Schema.Types.Number,
        height: Schema.Types.Number
    },
    productParam: String
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;