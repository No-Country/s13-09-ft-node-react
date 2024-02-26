import { Router } from "express";
import { patientFilesController } from "../controllers/index.controllers.js";

const router = Router();

/** GET Methods */
    /**
     * @openapi
     * '/patient-files/{patientId}/{fileId}':
     *  get:
     *     tags:
     *     - Patient Files Controller
     *     summary: Get patient file by file ID
     *     parameters:
     *      - name: fileId
     *        in: path
     *        description: The file's ID
     *        required: true
     *      - name: patientId
     *        in: path
     *        description: the patient's ID
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
router.get("/:patientId/:fileId", patientFilesController.getPatientFileById);

/**
 * @openapi
 * '/patient-files/{patientId}':
 *  get:
 *    tags:
 *      - Patient Files Controller
 *    summary: Get patient files (by patient's ID)
 *    parameters:
 *      - in: path
 *        name: patientId
 *        description: The patient's ID
 *        required: true
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
router.get("/:patientId", patientFilesController.getPatientFiles);

/** POST Methods */
    /**
     * @openapi
     * '/patient-files/':
     *  post:
     *     tags:
     *     - Patient Files Controller
     *     summary: Upload a file
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - patientId
     *              - description
     *              - filePath
     *            properties:
     *              patientId:
     *                type: uuid,
     *                default: 76cc92a5-af61-486f-bf87-43e2dbb6a159
     *              description:
     *                type: string
     *                default: Patient file description 1
     *              filePath:
     *                type: string
     *                default: /path/to/file1
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
router.post("/", patientFilesController.createPatientFile)

/** PUT Methods */
    /**
     * @openapi
     * '/patient-files/{patientId}/{fileId}':
     *  put:
     *     tags:
     *     - Patient Files Controller
     *     summary: Modify a patient file
     *     parameters:
     *      - name: fileId
     *        in: path
     *        description: The file's ID
     *        required: true
     *      - name: patientId
     *        in: path
     *        description: The patient's ID
     *        required: true
     *     requestBody:
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            properties:
     *              patientId:
     *                type: uuid,
     *                default: 76cc92a5-af61-486f-bf87-43e2dbb6a159
     *              description:
     *                type: string
     *                default: Patient file description 1
     *              filePath:
     *                type: string
     *                default: /path/to/file1
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
router.put("/:patientId/:fileId", patientFilesController.updatePatientFile);

/** DELETE methods */
    /**
     * @openapi
     * '/patient-files/{patientId}/{fileId}':
     *  delete:
     *     tags:
     *     - Patient Files Controller
     *     summary: Delete patient's file
     *     parameters:
     *      - name: fileId
     *        in: path
     *        description: The file's ID
     *        required: true
     *      - name: patientId
     *        in: path
     *        description: The patient's ID
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
router.delete("/:patientId/:fileId", patientFilesController.deletePatientFile);

export default router;