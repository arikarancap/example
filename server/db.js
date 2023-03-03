const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(() => {
    console.log("Datatabase Connected Succesfully...")
})
    .catch(err => console.log("Error connecting Database..."))
