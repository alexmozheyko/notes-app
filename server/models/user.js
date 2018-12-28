var crypto   = require('crypto'); 

var jwt      = require('jsonwebtoken');
var mongoose = require('../libs/mongoose'); 

var Schema = mongoose.Schema; 

var userSchema = new Schema({ 
    firstName: { 
        type     : String, 
        required : true 
    }, 
    lastName: { 
        type     : String, 
        required : true 
    }, 
    email: { 
        type     : String, 
        unique   : true, 
        required : true 
    }, 
    hashedPassword: { 
        type     : String, 
        required : true 
    }, 
    salt: { 
        type     : String, 
        required : true 
    },  
    hash: String,
    registrationDate: { 
        type    : Date, 
        default : Date.now 
    } 
}, { versionKey: false });

userSchema.methods.setSalt = () => {
    return this.salt = crypto.randomBytes(16).toString('hex');
}; 

userSchema.methods.setPassword = (password) => { 
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex'); 
    return this.hashedPassword = this.hash; 
}; 

userSchema.methods.validPassword = (password, user) => {
    let hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha1').toString('hex'); 
    return user.hashedPassword === hash; 
};

userSchema.methods.generateJwt = () => {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id       : this._id,
        email     : this.email,
        firstName : this.firstName,
        lastName  : this.lastName,
        exp       : parseInt(expiry.getTime() / 1000)
    }, "MY_SECRET")
}; 

userSchema.virtual('password') 
    .set(function (password) { 
        this._plainPassword = password;
        this.salt           = this.setSalt(); 
        this.hashedPassword = this.setPassword(password); 
    }) 
    .get(function () {
        return this._plainPassword 
    }); 

exports.User = mongoose.model('User', userSchema);