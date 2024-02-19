import { Router } from "express";
import authControllers from "../controllers/auth.controller.js";

const router = Router();

/** POST Methods */
    /**
     * @openapi
     * '/auth/login/':
     *  post:
     *     tags:
     *     - Auth Controller
     *     summary: Log a user
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
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.post("/login", authControllers.login);
router.post("/logout", );

export default router;