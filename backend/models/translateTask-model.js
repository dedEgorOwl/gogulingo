import { Schema, model } from 'mongoose';

const TranslateTaskSchema = new Schema({
	phrase: { type: String, required: true },
	answer: { type: String, required: true },
});

export default model('TranslateTaskModel', TranslateTaskSchema);
