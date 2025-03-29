const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Events management
 */


/**
 * @swagger
 * /api/events:
 *  post:
 *    tags: [Events]
 *    summary: Create a new event
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              photo:
 *                type: string
 *              start_date:
 *                type: string
 *                format: date
 *              start_time:
 *                type: string
 *                format: date
 *              finish_date:
 *                type: string
 *                format: date
 *              finish_time:
 *                type: string
 *                format: date
 *              info:
 *                type: string
 *              event_type_id:
 *                type: number
 *              human_category_id:
 *                type: number
 *              venue_id:
 *                type: number
 *              lang_id:
 *                type: number
 *              release_date:
 *                type: string
 *                format: date
 *    responses:
 *      '201':
 *        description: Event created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/events", eventController.createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     tags: [Events]
 *     summary: Get all events
 *     responses:
 *       '200':
 *         description: List of events
 *       '500':
 *         description: Server error
 */
router.get("/events", eventController.getEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     tags: [Events]
 *     summary: Get event by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       '200':
 *         description: Event details
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Server error
 */
router.get("/events/:id", eventController.getEventById);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     tags: [Events]
 *     summary: Update event by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *                 format: date
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *                 format: date
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '200':
 *         description: Event updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Server error
 */
router.put("/events/:id", eventController.updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *  delete:
 *    tags: [Events]
 *    summary: Delete event by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Event ID
 *    responses:
 *      '204':
 *        description: Event deleted
 *      '404':
 *        description: Event not found
 *      '500':
 *        description: Server error
 */
router.delete("/events/:id", eventController.deleteEvent);

module.exports = router;