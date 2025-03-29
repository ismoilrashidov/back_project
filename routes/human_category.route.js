const express = require("express");
const router = express.Router();
const human_categoryController = require("../controllers/human_categoryController");

/**
 * @swagger
 * tags:
 *   name: Human_categories
 *   description: Human_categories management
 */


/**
 * @swagger
 * /api/human_categories:
 *  post:
 *    tags: [Human_categories]
 *    summary: Create a new human_category
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              start_age:
 *                type: string
 *              finish_age:
 *                type: string
 *              gender:
 *                type: number
 *    responses:
 *      '201':
 *        description: Human_category created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/human_categories", human_categoryController.createHuman_category);

/**
 * @swagger
 * /api/human_categories:
 *   get:
 *     tags: [Human_categories]
 *     summary: Get all human_categories
 *     responses:
 *       '200':
 *         description: List of human_categories
 *       '500':
 *         description: Server error
 */
router.get("/human_categories", human_categoryController.getHuman_categories);

/**
 * @swagger
 * /api/human_categories/{id}:
 *   get:
 *     tags: [Human_categories]
 *     summary: Get human_category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human_category ID
 *     responses:
 *       '200':
 *         description: Human_category details
 *       '404':
 *         description: Human_category not found
 *       '500':
 *         description: Server error
 */
router.get("/human_categories/:id", human_categoryController.getHuman_categoryById);

/**
 * @swagger
 * /api/human_categories/{id}:
 *   put:
 *     tags: [Human_categories]
 *     summary: Update human_category by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human_category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Human_category updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Human_category not found
 *       '500':
 *         description: Server error
 */
router.put("/human_categories/:id", human_categoryController.updateHuman_category);

/**
 * @swagger
 * /api/human_categories/{id}:
 *  delete:
 *    tags: [Human_categories]
 *    summary: Delete Human_category by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Human_category ID
 *    responses:
 *      '204':
 *        description: Human_category deleted
 *      '404':
 *        description: Human_category not found
 *      '500':
 *        description: Server error
 */
router.delete("/human_categories/:id", human_categoryController.deleteHuman_category);

module.exports = router;