import { models } from "../models/index.js";
import { encrypt } from "../helpers/handleBcrypt.js"
async function getPatients() {
    try {
        const patientsList = await models.patient.findAll({
            attributes: {
                exclude: ['password']
            },
        });
        if (patientsList.length == 0) return null
        return patientsList
    } catch (error) {
        if (error.name == "SequelizeDatabaseError") return "bad"
        throw error
    }
}

async function getPatient(id) {
    try {
        const patient = await models.patient.findOne({
            where: { id: id },
            attributes: {
                exclude: ['password']
            },
        });
        if (!patient) return null
        return patient
    } catch (error) {
        if (error.name == "SequelizeDatabaseError") return "bad"
        throw error
    }
}

async function createPatient(data) {
    const { name, surname, identity_card, email, password, mobile } = data
    try {
        const checkEmail = await models.patient.findOne({ where: { email: email } });
        const checkIdentityCard = await models.patient.findOne({ where: { identity_card: identity_card } });
        if (checkEmail || checkIdentityCard) return 'ALREADY PATIENT';
        const hashedPassword = await encrypt(password);
        console.log(hashedPassword)
        const newPatient = await models.patient.create({
            name: name,
            surname: surname,
            identity_card: identity_card,
            email: email.toLowerCase(),
            password: hashedPassword,
            mobile: mobile
        });


        if (!newPatient) return null

        return newPatient

    } catch (error) {
        if (error.name == "SequelizeDatabaseError") return "bad"
        throw error
    }
}

async function updatePatient(id, changes) {
    try {
        if (changes.hasOwnProperty('password')) {
            delete changes['password'];
        }
        const updatedPatient = await models.patient.update({...changes }, {
            where: {
                id
            },
            attributes: {
                exclude: ['password']
            },
        })
        return updatedPatient
    } catch (error) {
        if (error.name == "SequelizeDatabaseError") return "bad"
        throw error
    }
}

async function deletePatient(id) {
    try {
        const removePatient = await models.patient.destroy({
            where: {
                id
            },
            attributes: {
                exclude: ['password']
            },
        })
        return removePatient
    } catch (error) {

        if (error.name == "SequelizeDatabaseError") return "bad"
        throw error
    }
}

const patientServices = {
    getPatients,
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
}


export default patientServices