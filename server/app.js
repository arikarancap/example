const express = require('express');
require('dotenv').config();
require('./db')
const User = require('./Employee')
const mongoose = require('mongoose');

const app = express();
app.post('/create-user', async (req, res) => {
    // const isNewUser = User.isThisEmailInUse('johnydepp@email.com')
    // if (!isNewUser)
    //     return res.json({
    //         success: false,
    //         message: 'This email is already in use, try sign-in'
    //     })

    const user = await User({
        fullname: 'Johni',
        email: 'johnydepp2@email.com',
        password: '1234'
    })
    await user.save();
    res.json(user);

})
app.get('/', (req, res) => {
    res.json({ success: true, message: "Welcome to Backend..." ,quotes: "Dont Worry Arikaran it will Work I will Be with you..."});

})



app.listen(8000, (data) => {
    console.log('Server Running...')
});