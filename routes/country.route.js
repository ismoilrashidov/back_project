const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");

/**
 * @swagger
 * tags:
 *   name: Countries
 *   description: Countries management
 */


/**
 * @swagger
 * /api/countries:
 *  post:
 *    tags: [Countries]
 *    summary: Create a new country
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              country:
 *                type: string
 *    responses:
 *      '201':
 *        description: Country created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/countries", countryController.createCountry);

/**
 * @swagger
 * /api/countries:
 *   get:
 *     tags: [Countries]
 *     summary: Get all countries
 *     responses:
 *       '200':
 *         description: List of countries
 *       '500':
 *         description: Server error
 */
router.get("/countries", countryController.getCountries);

/**
 * @swagger
 * /api/countries/{id}:
 *   get:
 *     tags: [Countries]
 *     summary: Get country by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       '200':
 *         description: Country details
 *       '404':
 *         description: Country not found
 *       '500':
 *         description: Server error
 */
router.get("/countries/:id", countryController.getCountryById);

/**
 * @swagger
 * /api/countries/{id}:
 *   put:
 *     tags: [Countries]
 *     summary: Update country by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Country updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Country not found
 *       '500':
 *         description: Server error
 */
router.put("/countries/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *  delete:
 *    tags: [Countries]
 *    summary: Delete country by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Country ID
 *    responses:
 *      '204':
 *        description: Country deleted
 *      '404':
 *        description: Country not found
 *      '500':
 *        description: Server error
 */
router.delete("/countries/:id", countryController.deleteCountry);

module.exports = router;