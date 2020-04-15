const express = require ('express')
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');
require ('dotenv').config();

const app = express();
const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.send('Welcome to my Capstone server!')
    })

    app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
    });