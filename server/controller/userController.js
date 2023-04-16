import asyncHandler from "express-async-handler";
import User from "../model/User.js";
import { genSalt, hash } from "bcrypt";

export const signIn = asyncHandler( async (req, res) => {
    const { email, password } = req.body;
    res.status(200).json({
        email,
        password
    })
});

export const signUp = asyncHandler( async (req, res) => {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please include all fields")
    }

    const existUser = await User.findOne({email});

    if (existUser) {
        res.status(400)
        throw new Error("Email already in use")
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
});