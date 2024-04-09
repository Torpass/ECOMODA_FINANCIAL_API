import express from 'express';

import accountValidator from '../validators/Accounts';
// import {getRecordById} from '../validators/FinancialRecord';
import {createFinancialRecord,getAllFinancialRecords} from '../controllers/FinancialRecords';
import FinancialRecordValidator from "../validators/FinancialRecords";
const router = express.Router();

//get all financial records from the Financial_record table
router.get("/getAllFinancialRecords",
            getAllFinancialRecords
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

/**
 * @swagger
 * tags:
 *   - name: financialrecords
 *     description: Everything about financial records
 * 
 * /getAllFinancialRecords:
 *   get:
 *     tags: [financialrecords]
 *     summary: Retrieve a list of all financial records
 *     responses:
 *       200:
 *         description: A list of financial records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/financialRecord'
 * 
 * /getFinancialRecordById/{id}:
 *   get:
 *     tags: [financialrecords]
 *     summary: Retrieve a specific financial record
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A specific financial record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/financialRecord'
 * 
 * /createFinancialRecord:
 *   post:
 *     tags: [financialrecords]
 *     summary: Create a new financial record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/financialRecord'
 *     responses:
 *       200:
 *         description: The created financial record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/financialRecord'
 * 
 * /updateFinancialRecord/{id}:
 *   put:
 *     tags: [financialrecords]
 *     summary: Update a specific financial record
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
 *             $ref: '#/components/schemas/financialRecord'
 *     responses:
 *       200:
 *         description: The updated financial record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/financialRecord'
 */
