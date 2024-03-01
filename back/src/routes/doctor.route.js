import {
    createDoctor,
    deleteDoctor,
    getDoctorId,
    getDoctors,
    updateDoctor,
} from "../controllers/doctor.controller.js";

import { Router } from "express";

const router = Router();

/**
 * @openapi
 * '/doctor':
 *  get:
 *     tags:
 *     - Doctor Controller
 *     summary: Get Doctor List
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

router.get("/", getDoctors)

/** POST Methods */
/**
 * @openapi
 * '/doctor':
 *  post:
 *     tags:
 *     - Doctor Controller
 *     summary: Register a new doctor
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - surname
 *              - email
 *              - password
 *              - mobile
 *            properties:
 *              name:
 *                type: string
 *                default: John
 *              surname:
 *                type: string
 *                default: Doe
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: mypass@1
 *              mobile:
 *                type: string
 *                default: 984587845
 *              schedule: 
 *                type: json
 *                default: {"monday":"9:00 AM - 5:00 PM","friday":"9:00 AM - 5:00 PM"}
 *     responses:
 *      200:
 *        description: Success
 */
router.post("/", createDoctor)

/**
 * @openapi
 * '/doctor/{id}':
 *  get:
 *     tags:
 *     - Doctor Controller
 *     summary: Get Doctor data
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The doctor ID
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
router.get("/:id", getDoctorId)

/** PUT Methods */
/**
 * @openapi
 * '/doctor/{id}':
 *  patch:
 *     tags:
 *     - Doctor Controller
 *     summary: Update doctor data
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The doctor ID
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
 *              schedule: 
 *                type: json
 *                default: {"monday":"9:00 AM - 5:00 PM","friday":"9:00 AM - 5:00 PM"}
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
router.patch("/:id", updateDoctor)

/** DELETE methods */
/**
 * @openapi
 * '/doctor/{id}':
 *  delete:
 *     tags:
 *     - Doctor Controller
 *     summary: Delete doctor
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The doctor ID
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
router.delete("/:id", deleteDoctor);

export default router;