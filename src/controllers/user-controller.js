const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try{
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            message: "Successfully create a new user",
            success: true,
            data: response,
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error
        });
    }

}

const signIn = async (req, res) => {
    try{
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: "Successfully signed in"
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error
        });
    }
}


const isAuthenticated = async (req, res) => {
    try{
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: "User is authenticated and token is valid"
        });

    }catch(error){
       console.log(error);
       return res.status(500).json({
           success: false,
           message: "Something went wrong",
           data: {},
           err: error
       });
    }
}

const isAdmin = async (req, res) => {
    try{
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: "Successfully fetched whether the user is admin or not"
        });
    }catch(error){
       console.log(error);
       return res.status(500).json({
           success: false,
           message: "Something went wrong",
           data: {},
           err: error
       });
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin,

}
