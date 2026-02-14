const login = require('../helpers/login');

const authController = {
    getLoginForm:  (req, res) => {
        const html = login
        res.send(html());
    }, 
};

module.exports = authController;