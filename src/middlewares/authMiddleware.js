const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //  verifica admin primero
        if (
            email === process.env.ADMIN_USERNAME
            &&
            password === process.env.ADMIN_PASSWORD
        ) {
            req.session.user = {
                email,
                role: 'admin'
            };

            return res.redirect('/dashboard');
        }

        // busca usuario en DB
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        if (user.password !== password) {
            return res.status(401).send('Invalid email or password');
        }

        req.session.user = user;

        res.send('Login correcto');

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};

module.exports = auth;

