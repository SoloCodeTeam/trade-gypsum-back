const express = require("express");
const router = express.Router();
const dataController = require('../controllers/dataController');

/**
 * @swagger
 * /api/data:
 *  get:
 *    tags: 
 *      - data
 *    description: Get all the Data from DB
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: data fetched successfully.
 */
router.get('/data', dataController.getData);

/**
 * @swagger
 * /api/data:
 *  post:
 *    tags: 
 *      - data
 *    description: Use to post data in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        description: post data parameters in DB.
 *        schema:
 *          type: object
 *          required:
 *              - img
 *              - title
 *              - text
 *          properties:
 *            img:
 *              type: string
 *            title:
 *              type: string
 *            text:
 *              type: string
 *    responses:
 *      '200':
 *        description: successfully.
 */
router.post('/data', dataController.postData);

 /**
 * @swagger
 * /api/data/{e}:
 *  put:
 *    tags:
 *      - data
 *    description: Used to update data in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: foodId        
 *      - in: body
 *        title: Update title
 *        description: Update food in DB.
 *        schema:
 *          type: object
 *          required:
 *            - foodName
 *            - quantity
 *          properties:
 *            foodName:
 *              type: string
 *            quantity:
 *              type: string
 *            createTillNow:
 *              type: string
 *            predicted:
 *              type: string
 *            status:
 *              type: string
 *    responses:
 *      '200':
 *        description: Food item updated successfully.
 */
 router.put('/data/:dataId', dataController.putData);

module.exports = router;  