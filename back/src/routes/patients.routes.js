import { Router } from "express";
import patientControllers from "../controllers/patients.controller.js";

const router = Router();

/** POST Methods */
/**
 * @openapi
 * '/patients/register/':
 *  post:
 *     tags:
 *     - Patient Controller
 *     summary: Register a new patient
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: johnDoe20!@
 *     responses:
 *      200:
 *        description: Success
 */
router.post("/register", patientControllers.register);
export default router;