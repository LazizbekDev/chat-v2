import {verify} from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../model/User.js";

export const protect = asyncHandler (async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = await verify(token, process.env.JWT_KEY);
            req.user = await User.findById(decoded.id).select('-password');

            next()
        } catch (err) {
            res.status(401)
            throw new Error('Unauthorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Unauthorized')
    }
})