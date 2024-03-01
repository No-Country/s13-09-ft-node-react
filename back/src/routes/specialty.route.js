import {
    createSpecialty,
    deleteSpecialty,
    getSpecialties,
    getSpecialtyId,
    updateSpecialty,
} from "../controllers/specialty.controller.js";

import { Router } from "express";

const router = Router();

/**
 * @openapi
 * tags:
 *   - name: "Specialty Controller"
 *     description: "Endpoints related to specialties"
 */

/** GET Methods */
/**
 * @openapi
 * '/specialty':
 *  get:
 *     tags:
 *     - Specialty Controller
 *     summary: Get Specialty List
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

router.get("/", getSpecialties);

/** POST Methods */
/**
 * @openapi
 * '/specialty':
 *  post:
 *     tags:
 *     - Specialty Controller
 *     summary: Register a new specialty
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *            properties:
 *              name:
 *                type: string
 *                default: Cardiology
 *     responses:
 *      200:
 *        description: Success
 */
router.post("/", createSpecialty);

/**
 * @openapi
 * '/specialty/{id}':
 *  get:
 *     tags:
 *     - Specialty Controller
 *     summary: Get Specialty data
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The specialty ID
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

router.get("/:id", getSpecialtyId);

/** PUT Methods */
/**
 * @openapi
 * '/specialty/{id}':
 *  put:
 *     tags:
 *     - Specialty Controller
 *     summary: Update specialty data
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The specialty ID
 *        required: true
 *     requestBody:
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                default: Medicine
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

router.patch("/:id", updateSpecialty);

/** DELETE methods */
/**
 * @openapi
 * '/specialty/{id}':
 *  delete:
 *     tags:
 *     - Specialty Controller
 *     summary: Delete specialty
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The specialty ID
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

router.delete("/:id", deleteSpecialty);

export default router;