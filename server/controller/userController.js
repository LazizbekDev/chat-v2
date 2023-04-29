import asyncHandler from "express-async-handler";
import User from "../model/User.js";
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken"

export const signIn = asyncHandler( async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});

    if (user && (await compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
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
        password: hashedPassword,
        avatar: `https://robohash.org/${email}`
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            token: generateToken(user._id)
        })
    }
});

export const me = (req, res) => {
    res.status(200).json(req.user)
}

export const getAllUsers = asyncHandler( async (req, res) => {
    try {
        const users = await User.find();

        res?.json(users)
    } catch (err) {
        throw new Error("Failed to catch users")
    }
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_KEY, {
        expiresIn: "30d"
    })
}