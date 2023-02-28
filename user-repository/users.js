const { Register, Address } = require("../models/users/users");

class UsersRepository {
    async create(req, res) {
        try {
            const params = req.body;
            const user = await Register.find({ 'email': params.email } || { 'mobileNumber': params.mobileNumber });
            if (user) {
                res.status(200).send({ message: 'User already registered' });
            } else {
                const registeredUser = await Register.create(params);
                if (registeredUser._id) {
                    res.status(200).send({ message: 'Created successfully' });
                }
            }
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong' });
        }
    }
    async login(req, res) {
        try {
            const params = req.body;
            const user = await Register.find({ 'email': params.email, 'password': params.password }, { email: 1, mobileNumber: 1, name: 1 });
            if (user.length > 0) {
                res.status(200).send({ user: user });
            } else {
                res.status(201).send({ message: 'User not registered' });
            }
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong', err: error });
        }
    }
    async getUserByEmailOrPhone(req, res) {
        try {
            const params = req.body;
            const user = await Register.find({ 'email': params.email } || { 'mobileNumber': params.mobileNumber });
            if (user._id) {
                res.status(200).send(user)
            }
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong', err: error });
        }
    }
    async addAddress(req, res) {
        try {
            const params = req.body;
            params.userId = req.params.id
            const addedAddress = await Address.create(params);
            if (addedAddress._id) {
                res.status(200).send({ message: 'Address added successfully' });
            }
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong' });
        }
    }
    async getAddressesByUserId(req, res) {
        try {
            const params = req.params;
            if(params.id){
                console.log(params.id)
                const allAddress = await Address.find({userId: params.id});
                if (allAddress.length > 0) {
                    res.status(200).send({ allAddress: allAddress });
                } else {
                    res.status(201).send({ message: 'No address has been added' });
                }
            } else {
                res.status(400).send({ message: 'User id is missing' });
            }
        } catch (error) {
            res.status(500).send({ message: 'Something went wrong', err: error });
        }
    }
}
module.exports = {
    userRepository: new UsersRepository()
}