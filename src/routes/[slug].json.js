import products from "./_checkdb.js";

console.log('[slug].json.js');

export async function get(req, res, next){
    const {slug} = req.params;
    console.log(slug);
    if (slug === "products"){
        let data = products;
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: "Not found"
        }));
    }
}