const express = require("express");
const router = express.Router();
const adminController = require('../controllers/adminController.js');

/**
 * @swagger
 * /api/admin:
 *  get:
 *    tags: 
 *      - admin
 *    description: Get all the admins from DB
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: data fetched successfully.
 */
router.get('/admin', adminController.getAdmin);

/**
 * @swagger
 * /api/admin:
 *  post:
 *    tags: 
 *      - admin
 *    description: Use to get admin in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: get name
 *        surname: get surname
 *        password: get password
 *        description: get admins in DB.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - surname
 *            - password
 *          properties:
 *            name:
 *              type: string
 *            surname:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: successfully.
 */
router.post('/admin', adminController.postAdmin);

 /**
 * @swagger
 * /api/data/{adminId}:
 *  put:
 *    tags:
 *      - admin
 *    description: Use to update admin in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: adminId
 *      - in : body
 *        name: update name
 *        title: update surname
 *        password: update password
 *        description: Update admin in DB.
 *        schema:
 *          type: object
 *          required:
 *            - name 
 *            - surname 
 *            - password
 *          properties:
 *            name:
 *              type: string
 *            surname:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: Admin updated successfully.
 */
 router.put('/data/:adminId', adminController.putAdmin);

 /**
 * @swagger
 * /api/data/{adminId}:
 *  delete:
 *    tags:
 *     - admin 
 *    description: Removes admin item from DB.
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: adminId
 *        description: Remove admin item from DB.
 *        schema:
 *          type: string
 *          required:
 *            - adminId
 *          properties:
 *            adminId:
 *              type: string
 *    responses:
 *      '200':
 *        description: Admin removed successfully.
 */
router.delete('/data/:adminId', adminController.deleteAdmin);

module.exports = router;  