const express = require("express");
const router = express.Router();
const ticket_statusController = require("../controllers/ticket_statusController");

/**
 * @swagger
 * tags:
 *   name: Ticket_status
 *   description: Ticket_status management
 */


/**
 * @swagger
 * /api/ticket_status:
 *  post:
 *    tags: [Ticket_status]
 *    summary: Create a new ticket_status
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *    responses:
 *      '201':
 *        description: Ticket_status created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/ticket_status", ticket_statusController.createTicket_status);

/**
 * @swagger
 * /api/ticket_status:
 *   get:
 *     tags: [Ticket_status]
 *     summary: Get all ticket_status
 *     responses:
 *       '200':
 *         description: List of ticket_status
 *       '500':
 *         description: Server error
 */
router.get("/ticket_status", ticket_statusController.getTicket_status);

/**
 * @swagger
 * /api/ticket_status/{id}:
 *   get:
 *     tags: [Ticket_status]
 *     summary: Get ticket_status by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket_status ID
 *     responses:
 *       '200':
 *         description: Ticket_status details
 *       '404':
 *         description: Ticket_status not found
 *       '500':
 *         description: Server error
 */
router.get("/ticket_status/:id", ticket_statusController.getTicket_statusById);

/**
 * @swagger
 * /api/ticket_status/{id}:
 *   put:
 *     tags: [Ticket_status]
 *     summary: Update ticket_status by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket_status ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Ticket_status updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Ticket_status not found
 *       '500':
 *         description: Server error
 */
router.put("/ticket_status/:id", ticket_statusController.updateTicket_status);

/**
 * @swagger
 * /api/ticket_status/{id}:
 *  delete:
 *    tags: [Ticket_status]
 *    summary: Delete ticket_status by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Ticket_status ID
 *    responses:
 *      '204':
 *        description: Ticket_status deleted
 *      '404':
 *        description: Ticket_status not found
 *      '500':
 *        description: Server error
 */
router.delete("/ticket_status/:id", ticket_statusController.deleteTicket_status);

module.exports = router;