import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import router from './router/index.js';
import { dotenvInit } from './dotenvInit.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
	try {
		await mongoose.connect(dotenvInit.parsed.DB_URL);

		app.listen(dotenvInit.parsed.PORT, () => {
			console.log(`Server started on PORT = ${dotenvInit.parsed.PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
