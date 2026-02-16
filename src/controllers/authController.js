const login = require('../helpers/login');
const User = require('../models/User');

const authController = {
    getLoginForm:  (req, res) => {
        const html = login();
        return res.send(html);
       
    }, 
    login: async (req, res) => {
        const { email, password } = req.body;
        //verificar si es admin
        if (
            email === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD
            ) {
                req.session.isLogged = true;
                req.session.isAdmin = true;
                console.log("logged admin");
                return res.redirect("/dashboard");
            }
            const user = await User.findOne({ email });
            if (!user) {
                req.session.isLogged = false;
                return res.status(401).send("usuario  o clave incorrecto"); //devolver html
            }
            //verificar password
            if (user.password !== password) {
                req.session.isLogged = false;
                return res.status(401).send("usuario  o clave incorrecto");
            }
            //iniciar sesion usuario
            req.session.isLogged = true;
            req.session.isAdmin = false;
            console.log("logged user " + user.email);
            return res.redirect("/");
        },
    };
        module.exports = authController;