import express from 'express';
import {createRequest, getAllRequets, updateRequest, getRequestById, declineRequest, acceptRequest} from '../controllers/Request';
import requestValidator from '../validators/Request';
import {getRequestsById} from '../validators/Request';
const router = express.Router();

//get all request from the Request table
router.get("/getAllRequest",
            getAllRequets);

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
