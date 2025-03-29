const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Carts management
 */


/**
 * @swagger
 * /api/carts:
 *  post:
 *    tags: [Carts]
 *    summary: Create a new cart
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              customer_id:
 *                type: number
 *              createdAt:
 *                type: string
 *                format: date
 *              finishedAt:
 *                type: string
 *                format: date
 *              status_id:
 *                type: number
 *    responses:
 *      '201':
 *        description: Cart created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/carts", cartController.createCart);

/**
 * @swagger
 * /api/carts:
 *   get:
 *     tags: [Carts]
 *     summary: Get all carts
 *     responses:
 *       '200':
 *         description: List of carts
 *       '500':
 *         description: Server error
 */
router.get("/carts", cartController.getCarts);

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     tags: [Carts]
 *     summary: Get cart by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       '200':
 *         description: Cart details
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server error
 */
router.get("/carts/:id", cartController.getCartById);

/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     tags: [Carts]
 *     summary: Update cart by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               finishedAt:
 *                 type: string
 *                 format: date
 *               status_id:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Cart updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Cart not found
 *       '500':
 *         description: Server error
 */
router.put("/carts/:id", cartController.updateCart);

/**
 * @swagger
 * /api/carts/{id}:
 *  delete:
 *    tags: [Carts]
 *    summary: Delete Cart by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Cart ID
 *    responses:
 *      '204':
 *        description: Cart deleted
 *      '404':
 *        description: Cart not found
 *      '500':
 *        description: Server error
 */
router.delete("/carts/:id", cartController.deleteCart);

module.exports = router;