const express = require("express");
const router = express.Router();
const delivery_methodController = require("../controllers/delivery_methodController");

/**
 * @swagger
 * tags:
 *   name: Delivery_methods
 *   description: Delivery_methods management
 */


/**
 * @swagger
 * /api/delivery_methods:
 *  post:
 *    tags: [Delivery_methods]
 *    summary: Create a new delivery_method
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
 *        description: Delivery_method created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/delivery_methods", delivery_methodController.createDelivery_method);

/**
 * @swagger
 * /api/delivery_methods:
 *   get:
 *     tags: [Delivery_methods]
 *     summary: Get all delivery_methods
 *     responses:
 *       '200':
 *         description: List of delivery_methods
 *       '500':
 *         description: Server error
 */
router.get("/delivery_methods", delivery_methodController.getDelivery_methods);

/**
 * @swagger
 * /api/delivery_methods/{id}:
 *   get:
 *     tags: [Delivery_methods]
 *     summary: Get delivery_methods by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery_method ID
 *     responses:
 *       '200':
 *         description: Delivery_method details
 *       '404':
 *         description: Delivery_method not found
 *       '500':
 *         description: Server error
 */
router.get("/delivery_methods/:id", delivery_methodController.getDelivery_methodById);

/**
 * @swagger
 * /api/delivery_methods/{id}:
 *   put:
 *     tags: [Delivery_methods]
 *     summary: Update delivery_method by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery_method ID
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
 *         description: Delivery_method updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Delivery_method not found
 *       '500':
 *         description: Server error
 */
router.put("/delivery_methods/:id", delivery_methodController.updateDelivery_method);

/**
 * @swagger
 * /api/delivery_methods/{id}:
 *  delete:
 *    tags: [Delivery_methods]
 *    summary: Delete delivery_method by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Delivery_method ID
 *    responses:
 *      '204':
 *        description: Delivery_method deleted
 *      '404':
 *        description: Delivery_method not found
 *      '500':
 *        description: Server error
 */
router.delete("/delivery_methods/:id", delivery_methodController.deleteDelivery_method);

module.exports = router;