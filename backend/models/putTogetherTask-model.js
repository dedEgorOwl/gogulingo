import { Schema, model } from 'mongoose';

const PutTogetherTaskSchema = new Schema({
	words: { type: Array, required: true },
	answer: { type: String, required: true },
});

export default model('PutTogetherTaskModel', PutTogetherTaskSchema);
