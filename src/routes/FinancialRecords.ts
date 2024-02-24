import express from 'express';

import accountValidator from '../validators/Accounts';
// import {getRecordById} from '../validators/FinancialRecord';
import {createFinancialRecord} from '../controllers/FinancialRecords';
import FinancialRecordValidator from "../validators/FinancialRecords";
const router = express.Router();

//get all financial records from the Financial_record table
router.get("/getAllFinancialRecord",
            );

//get an a specific record from the Financial_record table
router.get("/getFinancialRecordById/:id",
            
            );

//create a new record in the Financial_record table
router.post("/createFinancialRecord", 
            FinancialRecordValidator,
            createFinancialRecord
            );

//delete an account from the Account table
// router.delete("/deleteAccount/:id");

//update a record in the Financial_record table
router.put("/updateFinancialRecord/:id",
            accountValidator,
            );

module.exports = router;
