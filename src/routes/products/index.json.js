import Products from "../_product";
import mongoose from "mongoose";
// const uri = "mongodb+srv://qubitUser:ct2Iilr5ddAVgo2H@cluster0-z8ae8.mongodb.net/test?retryWrites=true&w=majority";

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, ", 'MongoDB connection error:"));

const out = [{
    "categories": ['shoes', 'belts', 'shirts', 'underwear'],
    "brands": ['nike', 'adidas', 'true religion']
}];

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end( JSON.stringify(out) );
    // console.log('products/index.json');
    // console.log(out);
}
