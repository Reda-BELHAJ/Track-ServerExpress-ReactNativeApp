require('./modules/User')
require('./modules/Track')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express();
app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes);

const mangoUri = 'mongodb+srv://admin:passwordpassword@cluster0.xsghe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mangoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to Mango Instance')
})

mongoose.connection.on('error', err => {
    console.error('Error Connecting to Mango Instance', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email is ${req.user.email}`)
});

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})