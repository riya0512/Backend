const router = require('express').Router();
const {

    getUser
} = require('../Controllers/UserController')



const userRoutes = (app) => {

    router.get('/', getUser);

    app.use('/api/user', router);
}


module.exports = userRoutes;