import { Router } from "express";
import {appointmentControllers} from '../controllers/index.controllers.js'
import { createAppointmentValidation, getAppointmentsQuery, modifyAppointmentValidation } from "../middleware/validations/appointment-validation.mdw.js";
import authVerificationMiddleware from "../middleware/authVerificationMiddleware.js";


const router = Router();

/**
 * @openapi
 * tags:
 *   - name: "Appointment Controller"
 *     description: "Endpoints related to appointments"
 */

/** GET Methods */
/**
 * @openapi
 * '/appointment/':
 *  get:
 *    tags:
 *      - Admin/doctor
 *    summary: Get appointment (all or by specific criteria)
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
router.get("/", [authVerificationMiddleware(["admin", "doctor"]),getAppointmentsQuery],   appointmentControllers.getAppointments)

    /**
     * @openapi
     * '/appointment/my/{patientId}':
     *  get:
     *     tags:
     *     - Patient
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
router.get("/my/:patientId", [authVerificationMiddleware("patient")], appointmentControllers.getUserAppointments)

/** POST Methods */
    /**
     * @openapi
     * '/appointment/':
     *  post:
     *     tags:
     *     - All
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
router.post("/", [authVerificationMiddleware(["patient", "doctor", "admin"]),createAppointmentValidation], appointmentControllers.createAppointment)

/** PUT Methods */
    /**
     * @openapi
     * '/appointment/{id}':
     *  put:
     *     tags:
     *     - Admin/doctor
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
router.put("/:id", [authVerificationMiddleware(["doctor", "admin"]), modifyAppointmentValidation], appointmentControllers.modifyAppointment)

    /**
     * @openapi
     * '/appointment/my/{patientId}/{id}':
     *  put:
     *     tags:
     *     - Patient
     *     summary: Modify an appointment
     *     parameters:
     *      - name: patientId
     *        in: path
     *        description: The patient ID
     *        required: true
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
router.put("/my/:patientId/:id", [authVerificationMiddleware(["patient"]), modifyAppointmentValidation], appointmentControllers.modifyMyAppointment) 

/** DELETE methods */
    /**
     * @openapi
     * '/appointment/{id}':
     *  delete:
     *     tags:
     *     - Admin/doctor
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
router.delete("/:id", [authVerificationMiddleware(["doctor", "admin"])], appointmentControllers.deleteAppointment)

/**
     * @openapi
     * '/appointment/my/{patientId}/{id}':
     *  delete:
     *     tags:
     *     - Patient
     *     summary: Delete appointment
     *     parameters:
     *      - name: patientId
     *        in: path
     *        description: The patient ID
     *        required: true
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
router.delete("/my/:patientId/:id", [authVerificationMiddleware(["patient"])], appointmentControllers.deleteMyAppointment)


export default router