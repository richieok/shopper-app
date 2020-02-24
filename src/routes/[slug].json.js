import Products from "./_products";
import mongoose from "mongoose";
const uri = "mongodb+srv://qubitUser:ct2Iilr5ddAVgo2H@cluster0-z8ae8.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, ", 'MongoDB connection error:"));

console.log('[slug].json.js');

export async function get(req, res, next) {
    const { slug } = req.params;
    console.log(slug);
    if (slug === "products") {
        Products.find({}).then(data => {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(data));
        }).catch(err => {
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({
                message: "Not found"
            }));
        });
    } else {
        Products.find({ productParam: slug }).then(data => {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(data));
        });
    }
}