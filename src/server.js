import sirv from 'sirv';
import express from 'express';
import session from "express-session";
import connect_mongo from "connect-mongo";
import mongoose from "mongoose";
import compression from 'compression';
import * as sapper from '@sapper/server';

const MongoStore = connect_mongo(session);

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();

const uri = "mongodb+srv://qubitUser:ct2Iilr5ddAVgo2H@cluster0-z8ae8.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});	

const db = mongoose.connection;
let store = new MongoStore({
	mongooseConnection: db,
	ttl: 1200
});
app.use(session({
	secret: 'YSTB536svb@#',
	resave: false,
	saveUninitialized: false,
	store: store
}));
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
