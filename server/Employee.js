const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        index: true,
        required: true,
        unique: true,
        // validate: {
        //     isAsync: true,
        //     validator: function (value, isValid) {
        //         const self = this;
        //         return self.constructor.findOne({ email: value })
        //             .exec(function (err, user) {
        //                 if (err) {
        //                     throw err;
        //                 }
        //                 else if (user) {
        //                     if (self.id === user.id) {  // if finding and saving then it's valid even for existing email
        //                         return isValid(true);
        //                     }
        //                     return isValid(false);
        //                 }
        //                 else {
        //                     return isValid(true);
        //                 }

        //             })
        //     },
            // message: 'The email address is already taken!'
        // },
    },
    password: {
        type: String,
        required: true,
    }
})


EmployeeSchema.statics.isThisEmailInUse = async function (email) {
    if (!email) throw new Error('Invalid Email');
    try {
        const user = await this.findOne({ email })
        if (user) return false

        return true;
    }
    catch (error) {
        console.log('error inside isThisEmailInUse method', error.message)
        return false
    }

}

// EmployeeSchema.methods.isThisEmailInUse

module.exports = mongoose.model('User', EmployeeSchema)