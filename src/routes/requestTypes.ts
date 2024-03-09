import express from 'express';
import {getAllRequestType,getRequestTypeById,createRequestType,updateRequestType} from '../controllers/RequestType';
import RequestTypeValidator, { getRequestTypetByIdValidator } from '../validators/RequestType';
const router = express.Router();

//get all RequestTypes from the Account table
router.get("/getAllRequestType",
            getAllRequestType);

//get an a specific RequestType from the Account table
router.get("/getRequestTypeById/:id",
            getRequestTypetByIdValidator,
            getRequestTypeById);

//create a new RequestType in the Account table
router.post("/createRequestType", 
            RequestTypeValidator,
            createRequestType);

//delete an RequestType from the Account table
router.delete("/deleteRequestType/:id");

//update an RequestType in the Account table
router.put("/updateRequestType/:id",
            RequestTypeValidator,
            updateRequestType);

module.exports = router;