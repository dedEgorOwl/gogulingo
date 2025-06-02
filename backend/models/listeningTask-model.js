import { Schema, model } from 'mongoose';

const ListeningTaskSchema = new Schema({
	audioPath: { type: String, required: true },
	answer: { type: String, required: true },
});

export default model('ListeningTaskModel', ListeningTaskSchema);
