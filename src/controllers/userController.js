const crearUsuario = require('../helpers/crearUsuario');
const User = require('../models/User');

const crearUsuarioController = {

    createNewUser: (req, res) => {
        const html = crearUsuario();
        res.send(html);
    }, 

    crearUsuario: async (req, res) => {
        try {
            const { email, password } = req.body;

            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).send('User already exists');
            }

            const newUser = await User.create({ email, password });

            return res.redirect('/login'); // solo una respuesta

        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).send('Error al crear usuario');
        }
    }
};

module.exports = crearUsuarioController;
