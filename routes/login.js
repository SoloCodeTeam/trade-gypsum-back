const express = require("express");
const router = express.Router();
const loginController = require('../controllers/loginController');

// /**
//  * @swagger
//  * /api/login:
//  *  get:
//  *    tags: 
//  *      - login
//  *    description: Get all the IPs from DB
//  *    produces:
//  *      - application/json
//  *    responses:
//  *      '200':
//  *        description: data fetched successfully.
//  */
// router.get('/login', loginController.getLogin);

/**
 * @swagger
 * /api/login:
 *  post:
 *    tags: 
 *      - login
 *    description: Use to get login member in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: get name
 *        password: get password
 *        description: get member parameters in DB.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - password
 *          properties:
 *            name:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: successfully.
 */
router.post('/login', loginController.postLogin);

module.exports = router;  