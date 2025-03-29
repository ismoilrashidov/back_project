const express = require("express");
const router = express.Router();
const payment_methodController = require("../controllers/payment_methodController");

/**
 * @swagger
 * tags:
 *   name: Payment_methods
 *   description: Payment_methods management
 */


/**
 * @swagger
 * /api/payment_methods:
 *  post:
 *    tags: [Payment_methods]
 *    summary: Create a new payment_method
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
 *        description: Payment_method created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/payment_methods", payment_methodController.createPayment_method);

/**
 * @swagger
 * /api/payment_methods:
 *   get:
 *     tags: [Payment_methods]
 *     summary: Get all payment_methods
 *     responses:
 *       '200':
 *         description: List of payment_methods
 *       '500':
 *         description: Server error
 */
router.get("/payment_methods", payment_methodController.getPayment_methods);

/**
 * @swagger
 * /api/payment_methods/{id}:
 *   get:
 *     tags: [Payment_methods]
 *     summary: Get payment_method by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment_method ID
 *     responses:
 *       '200':
 *         description: Payment_method details
 *       '404':
 *         description: Payment_method not found
 *       '500':
 *         description: Server error
 */
router.get("/payment_methods/:id", payment_methodController.getPayment_methodById);

/**
 * @swagger
 * /api/payment_methods/{id}:
 *   put:
 *     tags: [Payment_methods]
 *     summary: Update payment_method by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment_method ID
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
 *         description: Payment_method updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Payment_method not found
 *       '500':
 *         description: Server error
 */
router.put("/payment_methods/:id", payment_methodController.updatePayment_method);

/**
 * @swagger
 * /api/payment_methods/{id}:
 *  delete:
 *    tags: [Payment_methods]
 *    summary: Delete payment_method by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Payment_method ID
 *    responses:
 *      '204':
 *        description: Payment_method deleted
 *      '404':
 *        description: Payment_method not found
 *      '500':
 *        description: Server error
 */
router.delete("/payment_methods/:id", payment_methodController.deletePayment_method);

module.exports = router;