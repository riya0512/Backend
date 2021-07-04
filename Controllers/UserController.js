const db = require('../db/DBIndex');

module.exports.getUser = async (req,req)=>{

    try{
        const results = await db.getAllUsers();
        res.json(results);

    }
    catch(e){

        res.json({"message":e}).sendStatus(500);

    }
    



}

module.exports.register = async (req,res)=>{
    
    try {
        const results = await db.registerUser(req.body);
        res.json({"message":"Register Success"});
    }
    catch(e){
        res.json({"message":e}).sendStatus(500)
    }
}


module.exports.login = async (req,res)=>{
    try{
        const results = await db.login(req.body);
        if(results.length === 0) {
            res.json({"message":"Invalid Credentials"});
        }
        else{
            res.json({"message":"Success"});
        }

    }
    catch(e){
        res.json({"message":e}).sendStatus(500);
    }
}

