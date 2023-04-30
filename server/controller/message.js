import asyncHandler from "express-async-handler";
import Message from "../model/Message.js";

export const sendMessage = asyncHandler( async (req, res) => {
    try {
        const {from, to, message} = req.body;

        const data = await Message.create({
            message: {text: message},
            users: [from, to],
            sender: from
        })

        if (data) {
            res?.status(201).json({
                message: "Message successfully sent"
            })
        }
        res?.status(400).json({
            message: "Failed to send message"
        })
    } catch (err) {
        throw new Error("Something went to wrong!")
    }
});

export const getMessage = asyncHandler( async (req, res) => {
    const {from, to} = req.body;

    try {
        const messages = await Message.find({
            users: {
                $all: [from, to]
            }
        }).sort({updatedAt: 1});

        const projectMessages = messages.map(message=> {
            return {
                fromMe: message.sender.toString() === from,
                message: message.message.text
            }
        })

        res?.status(200).json(projectMessages);
    } catch (err) {
        throw new Error("Failed to fetch messages")
    }
});