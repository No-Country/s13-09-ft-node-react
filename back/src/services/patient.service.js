import { models } from "../models/index.js";
import { encrypt } from "../helpers/handleBcrypt.js"
async function getPatients() {
    try {
        const patientList = await models.patient.findAll({});
        if (patientsList.length == 0) return null
        return patientList
    } catch (error) {
        if (error.name == "SequelizeDatabaseError") return "bad"
        throw error
    }
}

async function getPatient(id) {
    try {
        const patient = await models.patient.findOne({
            where: { id: id }
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
        const checkEmail = await models.patient.findOne({ email: email });
        const checkIdentityCard = await models.patient.findOne({ identity_card: identity_card });
        if (checkEmail || checkIdentityCard) return 'ALREADY PATIENT'
        const hashedPassword = await encrypt(password)
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
        const updatedPatient = await models.patient.update({...changes }, {
            where: {
                id
            }
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
            }
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