const mongoose = require("mongoose");

const register = new mongoose.Schema({
    name: '',
    email: '',
    mobileNumber: '',
    password: ''
});
const address = new mongoose.Schema({
    dNo: '',
    flatNo: '',
    city: '',
    landMark: '',
    address1: '',
    address2: '',
    state: '',
    pinCode: '',
    userId: ''
})
const Register = mongoose.model('user-registration', register);
const Address = mongoose.model('user-address', address);
module.exports = {
    Register,
    Address
}