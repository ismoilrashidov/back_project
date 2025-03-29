const express = require("express");
const router = express.Router();
const cart_itemController = require("../controllers/cart_itemController");

/**
 * @swagger
 * tags:
 *   name: Cart_items
 *   description: Cart_items management
 */


/**
 * @swagger
 * /api/cart_items:
 *  post:
 *    tags: [Cart_items]
 *    summary: Create a new cart_item
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              ticket_id:
 *                type: number
 *              cart_id:
 *                type: number
 *              quantity:
 *                type: number
 *    responses:
 *      '201':
 *        description: Cart_item created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/cart_items", cart_itemController.createCart_item);

/**
 * @swagger
 * /api/cart_items:
 *   get:
 *     tags: [Cart_items]
 *     summary: Get all cart_items
 *     responses:
 *       '200':
 *         description: List of cart_items
 *       '500':
 *         description: Server error
 */
router.get("/cart_items", cart_itemController.getCart_items);

/**
 * @swagger
 * /api/cart_items/{id}:
 *   get:
 *     tags: [Cart_items]
 *     summary: Get cart_item by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart_item ID
 *     responses:
 *       '200':
 *         description: Cart_item details
 *       '404':
 *         description: Cart_item not found
 *       '500':
 *         description: Server error
 */
router.get("/cart_items/:id", cart_itemController.getCart_itemById);

/**
 * @swagger
 * /api/cart_items/{id}:
 *   put:
 *     tags: [Cart_items]
 *     summary: Update cart_item by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart_item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Cart_item updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Cart_item not found
 *       '500':
 *         description: Server error
 */
router.put("/cart_items/:id", cart_itemController.updateCart_item);

/**
 * @swagger
 * /api/cart_items/{id}:
 *  delete:
 *    tags: [Cart_items]
 *    summary: Delete cart_item by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Cart_item ID
 *    responses:
 *      '204':
 *        description: Cart_item deleted
 *      '404':
 *        description: Cart_item not found
 *      '500':
 *        description: Server error
 */
router.delete("/cart_items/:id", cart_itemController.deleteCart_item);

module.exports = router;