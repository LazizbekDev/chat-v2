import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please add your name"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Please add your email"]
    },
    password: {
        type: String,
        required: [true, "Please set your password"],
    },
    avatar: {
        type: String
    }
}, {timestamps: true});

export default model("User", userSchema);