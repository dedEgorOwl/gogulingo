import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    tasks: { type: [Number], default: [] },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
});

export default model("UserModel", UserSchema);
