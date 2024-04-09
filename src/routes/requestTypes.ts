import express from 'express';
import {getAllRequestType,getRequestTypeById,createRequestType,updateRequestType, deleteRequestType, getSelectedRequestType} from '../controllers/RequestType';
import RequestTypeValidator, { getRequestTypetByIdValidator, getSelectedRequestsTypeValidator } from '../validators/RequestType';
const router = express.Router();

//get all RequestTypes from the Account table
router.get("/getAllRequestType",
            getAllRequestType);


//this can be used to get specific request_type from the Request table, the statusType can be "Activo" or "Inactivo"
router.get("/getRequestsTypes/:statusType",
            getSelectedRequestsTypeValidator,
            getSelectedRequestType);


//get an a specific RequestType from the Account table
router.get("/getRequestTypeById/:id",
            getRequestTypetByIdValidator,
            getRequestTypeById);

//create a new RequestType in the Account table
router.post("/createRequestType", 
            RequestTypeValidator,
            createRequestType);

//delete an RequestType from the Account table
router.delete("/deleteRequestType/:id",
                deleteRequestType);

//update an RequestType in the Account table
router.put("/updateRequestType/:id",
            RequestTypeValidator,
            updateRequestType);

module.exports = router;

/**
 * @swagger
 * tags:
 *   - name: RequestType
 *     description: Everything about Request Types
 * 
 * /createRequestType:
 *   post:
 *     tags: [RequestType]
 *     summary: Create a new request type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/requestType'
 *     responses:
 *       200:
 *         description: The created request type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/requestType'
 * 
 * /deleteRequestType/{id}:
 *   delete:
 *     tags: [RequestType]
 *     summary: Delete a specific request type
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted request type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/requestType'
 * 
 * /updateRequestType/{id}:
 *   put:
 *     tags: [RequestType]
 *     summary: Update a specific request type
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/requestType'
 *     responses:
 *       200:
 *         description: The updated request type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/requestType'
 */