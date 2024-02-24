import { Router } from "express";
import patientControllers from "../controllers/patient.controller.js";

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
 *              - name
 *              - surname
 *              - identity_card
 *              - email
 *              - password
 *            properties:
 *              name:
 *                type: string
 *                default: John
 *              surname:
 *                type: string
 *                default: Doe
 *              identity_card:
 *                type: string
 *                default: 12041578
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: mypass@1
 *              mobile:
 *                type: string
 *                default: 984587845
 *     responses:
 *      200:
 *        description: Success
 */
router.post("/register", patientControllers.register);

/**
 * @openapi
 * '/patients':
 *  get:
 *     tags:
 *     - Patient Controller
 *     summary: Get Patient List
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

router.get("/", patientControllers.getPatients);

/**
 * @openapi
 * '/patients/{id}':
 *  get:
 *     tags:
 *     - Patient Controller
 *     summary: Get Patient data
 *     parameters:
 *      - name: id
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
router.get("/:id", patientControllers.getPatient);

/** PUT Methods */
/**
 * @openapi
 * '/patient/{id}':
 *  put:
 *     tags:
 *     - Patient Controller
 *     summary: Update patient data
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The patient ID
 *        required: true
 *     requestBody:
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                default: John
 *              surname:
 *                type: string
 *                default: Doe Liz
 *              mobile:
 *                type: string
 *                default: 968955845
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
router.put("/:id", patientControllers.updatePatient);

/** DELETE methods */
/**
 * @openapi
 * '/patient/{id}':
 *  delete:
 *     tags:
 *     - Patient Controller
 *     summary: Delete patient
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The patient ID
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
router.delete("/:id", patientControllers.deletePatient);

export default router;