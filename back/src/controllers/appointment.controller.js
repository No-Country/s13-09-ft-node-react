import HttpResponse from "../helpers/HttpResponse.js";
import { models } from "../models/index.js";
import {appointmentServices} from '../services/index.services.js'
import verifyUser from "../utils/verifyUser.js";

//GET para ADMIN/DOCTOR => query
async function getAppointments(req, res){
  try {
    //Chequea query valida (none,id,patientId,doctorId)
    if (Object.keys(req.query).length > 0 && (!req.query.doctorId && !req.query.patientId && !req.query.id)) {
      return HttpResponse.badRequest(res, { allowed_queries: "id, doctorId, patientId, or no query(/appointment) to get all" });
    }

    const appointments = await appointmentServices.getAppointments(req.query)
    //error db
    if(appointments=="bad") return HttpResponse.badRequest(res)
    //no se encuentra
    if(!appointments) return HttpResponse.notFound(res)
    
    return HttpResponse.success(res, { appointments });

  } catch (error) {
    return HttpResponse.serverError(res, { error: 'Could not fetch appointments' });
  }
}

//GET para USUARIO => param 
async function getUserAppointments(req, res){
  const id = req.params.patientId
  try {    
    const appointments = await appointmentServices.getUserAppointments(id)

    if(!appointments) return HttpResponse.notFound(res)

    if(appointments=="bad") return HttpResponse.badRequest(res)

    return HttpResponse.success(res, { appointments });

  } catch (error) {
    return HttpResponse.serverError(res, { error: 'Could not fetch appointments' });
  }
}

//CREAR => body
async function createAppointment(req, res){  
    try {
      const appointment = await appointmentServices.createAppointment(req.body)
      
      if(!appointment) return HttpResponse.conflict(res)
    
      if(appointment=="bad") return HttpResponse.badRequest(res)

      return HttpResponse.created(res, { appointment });

    } catch (error) {
      return HttpResponse.serverError(res, { error: 'Could not create appointment' });
    }
}

//MODIFICAR => param + body
async function modifyAppointment(req, res){

  const id = req.params.id

  try {
    const update = await appointmentServices.modifyAppointment({id}, req.body)

    if(!update) return HttpResponse.conflict(res)

    if(update=="bad") return HttpResponse.badRequest(res)
    
    return HttpResponse.noContent(res)

  } catch (error) {
    return HttpResponse.serverError(res)
  }
}

//MODIFICAR => params + body
async function modifyMyAppointment(req, res){
  try {
    const {patientId, id} = req.params;

    const token = req.headers.authorization;
    
    if(!token) return HttpResponse.badRequest(res, {message: "No token"});

    const checkId = await verifyUser(token);
    
    if(checkId!=patientId) return HttpResponse.badRequest(res, {message:"Wrong credentials"});

    const update = await appointmentServices.modifyAppointment({patientId, id}, req.body)

    if(!update) return HttpResponse.conflict(res)

    if(update=="bad") return HttpResponse.badRequest(res)
    
    return HttpResponse.noContent(res)

  } catch (error) {
    return HttpResponse.serverError(res)
  }
}

//BORRAR => param
async function deleteAppointment(req, res){
  
  const id = req.params.id
  
  try {
    
    const remove = await appointmentServices.deleteAppointment({id})

    if(!remove) return HttpResponse.conflict(res)

    if(remove=="bad") return HttpResponse.badRequest(res)
    
    return HttpResponse.noContent(res)

  } catch (error) {
    return HttpResponse.serverError(res)
  }
}

//BORRAR => params
async function deleteMyAppointment(req, res){
  try {
    const {patientId, id} = req.params;

    const token = req.headers.authorization;
    
    if(!token) return HttpResponse.badRequest(res, {message: "No token"});

    const checkId = await verifyUser(token);

    if(checkId!=patientId) return HttpResponse.badRequest(res, {message:"Wrong credentials"})
    
    const remove = await appointmentServices.deleteAppointment({patientId, id})

    if(!remove) return HttpResponse.conflict(res)

    if(remove=="bad") return HttpResponse.badRequest(res)
    
    return HttpResponse.noContent(res)

  } catch (error) {
    return HttpResponse.serverError(res)
  }
}


const appointmentControllers = {
  getAppointments,
  getUserAppointments,
  createAppointment,
  modifyAppointment,
  modifyMyAppointment,
  deleteAppointment,
  deleteMyAppointment,
}

export default appointmentControllers