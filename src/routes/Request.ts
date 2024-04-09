import express from 'express';
import {createRequest, getAllRequets, updateRequest, getRequestById, declineRequest, acceptRequest, getSelectedRequest} from '../controllers/Request';
import requestValidator, { getSelectedRequestsValidator } from '../validators/Request';
import {getRequestsById} from '../validators/Request';
const router = express.Router();

//get all request from the Request table
router.get("/getAllRequest",
            getAllRequets);


//this can be used to get specific request from the Request table, the statusType can be "Aceptada", "Rechazada" or "En espera"
router.get("/getRequests/:statusType",
            getSelectedRequestsValidator,
            getSelectedRequest);

            
//get an a specific request from the Request table
router.get("/getRequestById/:id",
            getRequestsById,
            getRequestById);

//create a new request in the Request table
router.post("/createRequest", 
            requestValidator,
            createRequest);

//this will decline an request from the Request table (from status "en espara" to "rechazada")
router.put("/declineRequest/:id",
            declineRequest
);

//this will accept an request from the Request table (from status "en espara" to "Aceptada")
router.put("/acceptRequest/:id",
            acceptRequest
);


//update an request in the Request table
router.put("/updateRequest/:id",
            requestValidator,
            updateRequest);

module.exports = router;

/**
 * @swagger
 * tags:
 *   - name: Request
 *     description: Everything about Requests
 * 
 * /getAllRequest:
 *   get:
 *     tags: [Request]
 *     summary: Retrieve a list of all requests
 *     responses:
 *       200:
 *         description: A list of requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/request'
 * 
 * /getRequests/{statusType}:
 *   get:
 *     tags: [Request]
 *     summary: Retrieve a list of requests with a specific status
 *     parameters:
 *       - in: path
 *         name: statusType
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of requests with the specified status
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/request'
 * 
 * /getRequestById/{id}:
 *   get:
 *     tags: [Request]
 *     summary: Retrieve a specific request
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A specific request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/request'
 * 
 * /createRequest:
 *   post:
 *     tags: [Request]
 *     summary: Create a new request
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/request'
 *     responses:
 *       200:
 *         description: The created request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/request'
 * 
 * /declineRequest/{id}:
 *   put:
 *     tags: [Request]
 *     summary: Decline a specific request
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The declined request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/request'
 */