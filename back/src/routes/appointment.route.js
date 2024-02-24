import { Router } from "express";
import {appointmentControllers} from '../controllers/index.controllers.js'
import { createAppointmentValidation, getAppointmentsQuery } from "../middleware/validations/appointment-validation.mdw.js";


const router = Router();

/** GET Methods */
/**
 * @openapi
 * '/appointment/':
 *  get:
 *    tags:
 *      - Appointment Controller
 *    summary: Get admin/doctor appointment (all or by specific criteria)
 *    parameters:
 *      - in: query
 *        name: id
 *        schema:
 *          type: string
 *        description: The appointment ID.
 *      - in: query
 *        name: patientId
 *        schema:
 *          type: string
 *        description: The ID of the patient associated with the appointment.
 *      - in: query
 *        name: doctorId
 *        schema:
 *          type: string
 *        description: The ID of the doctor associated with the appointment.
 *    responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not found
 *      500:
 *        description: Server Error
 */
router.get("/", [getAppointmentsQuery],   appointmentControllers.getAppointments)

    /**
     * @openapi
     * '/appointment/my/{patientId}':
     *  get:
     *     tags:
     *     - Appointment Controller
     *     summary: Get user appointment
     *     parameters:
     *      - name: patientId
     *        in: path
     *        description: The patient ID
     *        required: true
     *     responses:
     *      200:
     *        description: Success
     *      400:
     *        description: Bad request
     *      404:
     *        description: Not found
     *      500:
     *        description: Server Error
     */
router.get("/my/:patientId", appointmentControllers.getUserAppointments)

/** POST Methods */
    /**
     * @openapi
     * '/appointment/':
     *  post:
     *     tags:
     *     - Appointment Controller
     *     summary: Create an appointment
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - patientId
     *              - doctorId
     *              - observations
     *              - day
     *              - time
     *            properties:
     *              patientId:
     *                type: uuid,
     *                default: fc07b157-2cc8-41da-b00b-d7e0aa90d8b1
     *              doctorId:
     *                type: uuid,
     *                default: c3f5fde5-74cf-43e5-bb86-5e894f55ff9d
     *              observations:
     *                type: json
     *                default: {"observation":"Something"}
     *              day:
     *                type: dateonly
     *                default: 2024-02-12
     *              time:
     *                type: time
     *                default: 08:00:00
     *     responses:
     *      201:
     *        description: Created
     *      400:
     *        description: Bad request
     *      409:
     *        description: Conflict
     *      500:
     *        description: Server Error
     */
router.post("/", [createAppointmentValidation], appointmentControllers.createAppointment)

/** PUT Methods */
    /**
     * @openapi
     * '/appointment/{id}':
     *  put:
     *     tags:
     *     - Appointment Controller
     *     summary: Modify an appointment
     *     parameters:
     *      - name: id
     *        in: path
     *        description: The appointment ID
     *        required: true
     *     requestBody:
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            properties:
     *              observations:
     *                type: json
     *                default: {"observation":"Something"}
     *              day:
     *                type: dateonly
     *                default: 2024-02-12
     *              time:
     *                type: time
     *                default: 08:00:00
     *     responses:
     *      204:
     *        description: No content
     *      400:
     *        description: Bad request
     *      409:
     *        description: Conflict
     *      500:
     *        description: Server Error
     */
router.put("/:id", appointmentControllers.modifyAppointment)

/** DELETE methods */
    /**
     * @openapi
     * '/appointment/{id}':
     *  delete:
     *     tags:
     *     - Appointment Controller
     *     summary: Delete appointment
     *     parameters:
     *      - name: id
     *        in: path
     *        description: The appointment ID
     *        required: true
     *     responses:
     *      204:
     *        description: No content
     *      400:
     *        description: Bad request
     *      409:
     *        description: Conflict
     *      500:
     *        description: Server Error
     */
router.delete("/:id", appointmentControllers.deleteAppointment)


export default router