import { models } from "../models/index.js";


async function getAppointments(input){
  try {

    let query = {};

    if (input.doctorId) query.doctorId = input.doctorId;
    
    else if (input.patientId) query.patientId = input.patientId;
    
    else if (input.id) query.id = input.id;

    const appointments = await models.appointment.findAll({
      where:query
    });
    
    if(appointments.length == 0) return null

    return appointments

  } catch (error) {

    if(error.name == "SequelizeDatabaseError") return "bad"
    throw error

  }
}

async function getUserAppointments(id){
  try {
    
    const appointments = await models.appointment.findAll({
      where:{patientId:id}
    });

    if(!appointments || appointments.length==0) return null

    return appointments

  } catch (error) {

    if(error.name == "SequelizeDatabaseError") return "bad"
    throw error

  }
}

async function createAppointment(body){
  
  const {doctorId, patientId, observations, day, time} = body
  
  try {
    const appointment = await models.appointment.create({
      doctorId,
      patientId,
      observations,
      day,
      time
    });
    
    if(!appointment) return null

    return appointment

  } catch (error) {
    
    if(error.name == "SequelizeDatabaseError" || error.name == "SequelizeUniqueConstraintError" || error.name == "SequelizeValidationError") return "bad"
    throw error

  }
}

async function modifyAppointment(id, updates){
  try {

    const update = await models.appointment.update({...updates}, {
      where:{
        id
      }
    })

    return update

  } catch (error) {

    if(error.name == "SequelizeDatabaseError") return "bad"
    throw error

  }
}

async function deleteAppointment(id){
  try {

    const remove = await models.appointment.destroy({
      where:{
        id
      }
    })
    return remove

  } catch (error) {

    if(error.name == "SequelizeDatabaseError") return "bad"
    throw error
  
  }
}

const appointmentServices = {
  getAppointments,
  getUserAppointments,
  createAppointment,
  modifyAppointment,
  deleteAppointment
}


export default appointmentServices