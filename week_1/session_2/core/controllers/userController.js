const User = require('../models/user');

module.exports = {
    getAll: async (req, res) => {
        try {
            const data = await User.find();
            res.status(200).json(data)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    get: async (req, res) => {
        try {
            const data = await User.findById(req.params.id);
            res.status(200).json(data)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    post: async (req, res) => {
        const data = new User({
            name: req.body.name,
            password: req.body.password,
            role: req.body.role
        })

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    update: async (req, res) => {
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
            res.status(400).json({ message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await User.findByIdAndDelete(id)
            res.send(`Document with ${data.name} has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}