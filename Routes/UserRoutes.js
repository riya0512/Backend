const router = require('express').Router();
const {
    getUser,register,login
} = require('../Controllers/UserController')



const userRoutes = (app) => {

    router.get('/', getUser);
    router.post('/',register);
    router.post('/login',login);

    app.use('/api/user', router);
}


module.exports = userRoutes;