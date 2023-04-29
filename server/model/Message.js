import { Schema, model } from "mongoose";

const messages = new Schema({
    message: {
        text: {
            type: String,
            required: true
        }
    },
    users: {
        type: Array
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
})

export default model('Message', messages);