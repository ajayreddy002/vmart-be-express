const yup = require('yup');

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const usersScheama = yup.object({
    body: yup.object({
        name: yup.string().required('User name is required'),
        email: yup.string().required('Email is required').email('Please enter valid email'),
        mobileNumber: yup.string().required('Mobile number is required').matches(phoneRegExp, 'Phone number is not valid'),
        password: yup.string().required().min(8)
    })
});
const addressSchema = yup.object({
    body: yup.object({
        dNo: yup.string().required('door no is required'),
        flatNo: yup.string().required('Flat no is required'),
        city: yup.string().required('City is required'),
        address1: yup.string().required('Address1 is required'),
        state: yup.string().required('State is required'),
        pinCode: yup.string().required('Pin code is required')
    }),
    params: yup.object({
        id: yup.string().required('User id is required'),
    }),
});
module.exports = {
    users: usersScheama,
    adress: addressSchema
}