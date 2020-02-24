
import Product from "./_products";
import mongoose from "mongoose";
const uri = "mongodb+srv://qubitUser:ct2Iilr5ddAVgo2H@cluster0-z8ae8.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, ", 'MongoDB connection error:"));

let products = [];

// Product.find({}, (err, res)=>{
//     if (err){
//         console.log(err);
//     } else {
//         products = res;
//     }
// });


products = [
    {
        "productName": "Red and Black Nike",
        "brand": "nike",
        "sizes": [8, 9, 10, 11, 12],
        "price": 67.99,
        "images": [
            {
                url: "https://marketplaceapp-test-bucket.s3.eu-west-2.amazonaws.com/public/red-and-black-nike-running-shoe.jpg",
                alt: "red-and-black-nike-running-shoe"
            }
        ]
    },
    {
        "productName": "Light Tread",
        "brand": "nike",
        "sizes": [8, 9, 10, 11, 12],
        "price": 51.99,
        "images": [
            {
                url: "https://marketplaceapp-test-bucket.s3.eu-west-2.amazonaws.com/public/sneakers-on-white-background.jpg",
                alt: "sneakers-on-white-background"
            }
        ]
    }
];


export default products;