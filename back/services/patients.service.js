import models from "../models/index.js"

async function register() {
    try {
        console.log(data.email)
        const { name, surname, identity_card, email, password, mobile } = data;
        const hashPassword = await encrypt(password);
        const newPatient = {
            name,
            surname,
            identity_card,
            email: email.toLowerCase(),
            password: hashPassword,
            mobile
        }
        const response = await models.patient.create(newPatient)
        response.set("password", undefined, { strict: false })
        return response
    } catch (error) {
        return {
            message: error
        };
    }
}

async function checkPatient() {
    try {
        const user = await patients.findOne({
            where: { email: email }
        });
        if (user) return user;
    } catch (error) {
        return {
            message: error
        };
    }
}

const patientServices = {
    register,
    checkPatient
};

export default patientServices;