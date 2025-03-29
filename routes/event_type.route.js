const express = require("express");
const router = express.Router();
const event_typeController = require("../controllers/event_typeController");

/**
 * @swagger
 * tags:
 *   name: Event_types
 *   description: Event_types management
 */


/**
 * @swagger
 * /api/event_types:
 *  post:
 *    tags: [Event_types]
 *    summary: Create a new event_type
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              parent_event_type_id:
 *                type: string
 *    responses:
 *      '201':
 *        description: Event_type created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/event_types", event_typeController.createEvent_type);

/**
 * @swagger
 * /api/event_types:
 *   get:
 *     tags: [Event_types]
 *     summary: Get all Event_types
 *     responses:
 *       '200':
 *         description: List of event_types
 *       '500':
 *         description: Server error
 */
router.get("/event_types", event_typeController.getEvent_types);

/**
 * @swagger
 * /api/event_types/{id}:
 *   get:
 *     tags: [Event_types]
 *     summary: Get event_type by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_type ID
 *     responses:
 *       '200':
 *         description: Event_type details
 *       '404':
 *         description: Event_type not found
 *       '500':
 *         description: Server error
 */
router.get("/event_types/:id", event_typeController.getEvent_typeById);

/**
 * @swagger
 * /api/event_types/{id}:
 *   put:
 *     tags: [Event_types]
 *     summary: Update event_type by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Event_type updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Event_type not found
 *       '500':
 *         description: Server error
 */
router.put("/event_types/:id", event_typeController.updateEvent_type);

/**
 * @swagger
 * /api/event_types/{id}:
 *  delete:
 *    tags: [Event_types]
 *    summary: Delete event_type by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Event_type ID
 *    responses:
 *      '204':
 *        description: Event_type deleted
 *      '404':
 *        description: Event_type not found
 *      '500':
 *        description: Server error
 */
router.delete("/event_types/:id", event_typeController.deleteEvent_type);

module.exports = router;