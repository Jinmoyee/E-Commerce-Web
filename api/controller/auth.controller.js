import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandeler } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body
    const hashPass = bcryptjs.hashSync(password, 13);
    const newUser = new User({ username, email, password: hashPass })

    try {
        await newUser.save()
        res.status(201).json("New user has been created")
    } catch (error) {
        next(error)
    }
}

export const signIn = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return next(errorHandeler(404, "User not found"))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validUser) {
            return next(errorHandeler(401, "Password is not correct!"))
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: pass, ...rest } = validUser._doc
        res.cookie("token", token, {
            httpOnly: true
        }).status(200).json(rest)
    } catch (error) {
        next(error)
    }
}