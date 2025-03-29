const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customers management
 */


/**
 * @swagger
 * /api/customers:
 *  post:
 *    tags: [Customers]
 *    summary: Create a new customer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              first_name:
 *                type: string
 *              last_name:
 *                type: string
 *              phone:
 *                type: string
 *              hashed_password:
 *                type: string
 *              email:
 *                type: string
 *              birth_date:
 *                type: string
 *                format: date
 *              gender:
 *                type: number
 *              lang_id:
 *                type: number
 *              hashed_refresh_token:
 *                type: string
 *    responses:
 *      '201':
 *        description: Customer created
 *      '400':
 *        description: Invalid input
 *      '500':
 *        description: Server error
 */
router.post("/customers", customerController.createCustomer);

/**
 * @swagger
 * /api/customersLogin:
 *   post:
 *     tags: [Customers]
 *     summary: Login customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successful login
 *       '401':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/customersLogin", customerController.loginCustomer);

/**
 * @swagger
 * /api/customers:
 *   get:
 *     tags: [Customers]
 *     summary: Get all customers
 *     responses:
 *       '200':
 *         description: List of customers
 *       '500':
 *         description: Server error
 */
router.get("/customers", customerController.getCustomers);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     tags: [Customers]
 *     summary: Get customer by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       '200':
 *         description: Customer details
 *       '404':
 *         description: Customer not found
 *       '500':
 *         description: Server error
 */
router.get("/customers/:id", customerController.getCustomerById);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     tags: [Customers]
 *     summary: Update customer by ID
 *     parameters:
 *       - in: path 
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Customer updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Customer not found
 *       '500':
 *         description: Server error
 */
router.put("/customers/:id", customerController.updateCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *  delete:
 *    tags: [Customers]
 *    summary: Delete customer by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Customer ID
 *    responses:
 *      '204':
 *        description: Customer deleted
 *      '404':
 *        description: Customer not found
 *      '500':
 *        description: Server error
 */
router.delete("/customers/:id", customerController.deleteCustomer);

module.exports = router;