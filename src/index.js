const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const UserService  = require('./services/user-service');
const db = require('./models/index');
// const { User, Role } = require('./models/index');


const app = express();

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Started server on port: ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
        }


        // const service = new UserService();
        // const newToken = service.createToken({email: 'randomuser@gmail.com', id: 2});
        // console.log("New token is ", newToken);
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbmRvbXVzZXJAZ21haWwuY29tIiwiaWQiOjIsImlhdCI6MTY3MTcyODU3MSwiZXhwIjoxNjcxNzI4NjAxfQ.kUv5yuA51Psew3pvzCoOTxt7pVFNAi8u2yw9Nr1GFb8";
        // const response = service.verifyToken(token);
        // console.log(response);

    });
}

prepareAndStartServer();


