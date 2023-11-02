import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const auth = async (req, res) => {
    const { username, email, password } = req.body
    const hashPass = bcryptjs.hashSync(password, 13);
    const newUser = new User({ username, email, password: hashPass })

    try {
        await newUser.save()
        res.status(201).json("New user has been created")
    } catch (error) {
        res.status(501).json(error.message)
    }
}