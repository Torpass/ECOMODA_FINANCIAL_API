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