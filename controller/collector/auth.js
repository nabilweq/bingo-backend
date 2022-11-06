const User = require('../../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.signup = async (req, res) => {
    try {
        const user = await User.findOne({$or: [{email: req.body.email}, {phone: req.body.phone}]});
        if(user) {
            return res.status(400).json({
                success: false,
                message: "A user already existing with the given email id or phone number"
            })
        }
        const password = await bcrypt.hash(req.body.password, 10)

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: password,
            address: req.body.address,
            role: "collector"
        })

        await newUser.save();

        return res.status(200).json({
            success: true,
            message: "Collector created successfully",
            data: newUser
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }

};

module.exports.login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email, role: "collector"});
        if(!user) {
            return res.status(400).json({
                success: false,
                message: "Collector doesn't exist with given email id"
            })
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false, 
                message: "Invalid credentials" 
            });
        }

        const payload = {
            user: {
              id: user.id,
              user: "user"
            }
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1 year' },
            (err, token) => {
              if (err) throw err;
              return res.status(200).json({
                success: true,
                message: "Collector signed in successfully",
                data: user,
                token
              })
            }
        );

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }

};