const bcrypt = require('bcrypt')

const User = require('../models/user');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const data = await User.find();
            res.status(200).json(data)
        }
        catch (error) {
            next(error)
        }
    },
    get: async (req, res, next) => {
        try {
            const data = await User.findById(req.params.id);
            res.status(200).json(data)
        }
        catch (error) {
            next(error)
        }
    },
    post: async (req, res, next) => {
        const {
            username,
            password,
            role,
            fullName,
            email,
            phone,
            address,
            googleId,
            picture,
            providerId,
            uid,
            accessToken,
        } = req.body;

        try {
            let existed;
            if (providerId) {
                existed = await User.findOne({ uid })
                if (existed) return res.status(200).json(existed)
            }
            else existed = await User.findOne({ username })
            if (existed) return res.status(400).json({ message: `User ${username} has already existed` });
        } catch (error) {
            next(error)
        }

        let hashedPassword = ""

        if (!providerId) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const newUser = new User({
            username,
            password: hashedPassword,
            role,
            fullName,
            email,
            phone,
            address,
            googleId,
            picture,
            providerId,
            uid,
            accessToken,
        })

        try {
            const dataToSave = await newUser.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            // return res.status(400).json({ message: error.message })
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };

            const result = await User.findByIdAndUpdate(
                id, updatedData, options
            )

            res.send(result)
        }
        catch (error) {
            next(error)
        }
    },
    delete: async (req, res, next) => {
        try {
            const id = req.params.id;
            const data = await User.findByIdAndDelete(id)
            res.send(`Document with ${data.name} has been deleted..`)
        }
        catch (error) {
            next(error)
        }
    },
    login: async (req, res, next) => {
        const { username, password } = req.body;

        try {
            const user = await User.findOne({ username })

            if (!user) return res.status(400).json({ message: 'Invalid username or password!' })

            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (!isPasswordValid) return res.status(401).json({ message: 'Invalid username or password!' })

            const userResponse = {
                _id: user._id,
                username: user.username,
                role: user.role,
                fullName: user.fullName,
                email: user.email,
                phone: user.phone,
                address: user.address,
            };

            res.status(200).json(userResponse)
        }
        catch (error) {
            next(error)
        }
    }
}