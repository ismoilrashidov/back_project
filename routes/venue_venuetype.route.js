const express = require("express");
const router = express.Router();
const venue_venuetypeController = require("../controllers/venue_venuetypeController");

/**
 * @swagger
 * tags:
 *   name: Venue_venuetypes
 *   description: Venue_venuetype management
 */


/**
 * @swagger
 * /api/venue_venuetypes:
 *  post:
 *    tags: [Venue_venuetypes]
 *    summary: Create a new venue_venuetype
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              venueId:
 *                type: number
 *              venuetypeId:
 *                type: number
 *    responses:
 *      '201':
 *        description: Venue_venuetype created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/venue_venuetypes", venue_venuetypeController.createVenue_venuetype);

/**
 * @swagger
 * /api/venue_venuetypes:
 *   get:
 *     tags: [Venue_venuetypes]
 *     summary: Get all venue_venuetypes
 *     responses:
 *       '200':
 *         description: List of venue_venuetypes
 *       '500':
 *         description: Server error
 */
router.get("/venue_venuetypes", venue_venuetypeController.getVenue_venuetypes);

/**
 * @swagger
 * /api/venue_venuetypes/{id}:
 *   get:
 *     tags: [Venue_venuetypes]
 *     summary: Get venue_venuetype by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_venuetype ID
 *     responses:
 *       '200':
 *         description: Venue_venuetype details
 *       '404':
 *         description: Venue_venuetype not found
 *       '500':
 *         description: Server error
 */
router.get("/venue_venuetypes/:id", venue_venuetypeController.getVenue_venuetypeById);

/**
 * @swagger
 * /api/venue_venuetypes/{id}:
 *   put:
 *     tags: [Venue_venuetypes]
 *     summary: Update venue_venuetype by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_venuetype ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: number
 *               venuetypeId:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Venue_venuetype updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Venue_venuetype not found
 *       '500':
 *         description: Server error
 */
router.put("/venue_venuetypes/:id", venue_venuetypeController.updateVenue_venuetype);

/**
 * @swagger
 * /api/venue_venuetypes/{id}:
 *  delete:
 *    tags: [Venue_venuetypes]
 *    summary: Delete Venue_venuetype by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Venue_venuetype ID
 *    responses:
 *      '204':
 *        description: Venue_venuetype deleted
 *      '404':
 *        description: Venue_venuetype not found
 *      '500':
 *        description: Server error
 */
router.delete("/venue_venuetypes/:id", venue_venuetypeController.deleteVenue_venuetype);

module.exports = router;