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
 *    security:
 *      - token: []
 *    tags: 
 *      - data
 *    description: Use to get data in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: title
 *        in: body
 *        text: get text
 *        title: get title
 *        img: get img
 *        description: get member parameters in DB.
 *        schema:
 *          type: object
 *          required:
 *            - text
 *            - title
 *            - img
 *          properties:
 *            text:
 *              type: string
 *            title:
 *              type: string
 *            img:
 *              type: string
 *    responses:
 *      '200':
 *        description: successfully.
 */
router.post('/data', dataController.postData);

 /**
 * @swagger
 * /api/data/{dataId}:
 *  put:
 *    security:
 *      - token: []
 *    tags:
 *      - data
 *    description: Use to update data in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: dataId
 *      - name: title
 *        in : body
 *        title: update title
 *        text: update text
 *        img: update img
 *        description: Update data in DB.
 *        schema:
 *          type: object
 *          required:
 *            - title 
 *            - text 
 *            - img
 *          properties:
 *            title:
 *              type: string
 *            text:
 *              type: string
 *            img:
 *              type: string
 *    responses:
 *      '200':
 *        description: Data updated successfully.
 */
 router.put('/data/:dataId', dataController.putData);

 /**
 * @swagger
 * /api/data/{dataId}:
 *  delete:
 *    security:
 *      - token: []
 *    tags:
 *     - data 
 *    description: Removes data item from DB.
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: dataId
 *        description: Remove data item from DB.
 *        schema:
 *          type: string
 *          required:
 *            - dataId
 *          properties:
 *            dataId:
 *              type: string
 *    responses:
 *      '200':
 *        description: Data item removed successfully.
 */
router.delete('/data/:dataId', dataController.deleteData);

module.exports = router;  