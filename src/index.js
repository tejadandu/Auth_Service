const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const { User } = require('./models/index');

// const bcrypt = require('bcryptjs');


const app = express();

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Started server on port: ${PORT}`);
    //     const incomingPassword = '67890';
    //     const user = await User.findByPk(3);
    //     const response = bcrypt.compareSync(incomingPassword, user.password);
    //     console.log(response);
    });
}

prepareAndStartServer();


