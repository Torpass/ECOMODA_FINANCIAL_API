import express from 'express';
import {createAccount, getAllAcounts, getAcounts, deleteAccount, updateAccount, getAcountById} from '../controllers/Accounsts';
import {getAccountWithAllRecords} from '../controllers/Accounsts';
import accountValidator, { ValidatorUpdateAccount } from '../validators/Accounts';
import {getAccountById} from '../validators/Accounts';
const router = express.Router();

//get all accounts from the Account table
router.get("/getAllAccounts",
            getAllAcounts);

//get only active accounts from the Account table
router.get("/getAccounts",
            getAcounts);

//get only inactive accounts from the Account table
router.get("/getInactiveAccounts",
            getAcounts);

//get all accounts from the Account table
router.get("/getAccountsWithAllRecords/:accountId",
            getAccountWithAllRecords);

//get an a specific account from the Account table
router.get("/getAccountById/:id",
            getAccountById,
            getAcountById);

//create a new account in the Account table
router.post("/createAccount", 
            accountValidator,
            createAccount);

//delete an account from the Account table
router.delete("/deleteAccount/:id",
                deleteAccount);

//update an account in the Account table
router.put("/updateAccount/:accountId",
            ValidatorUpdateAccount,
            updateAccount);

module.exports = router;


/**
 * @swagger
 * tags:
 *   - name: accounts
 *     description: Everything about accounts
 * 
 * /getAllAccounts:
 *   get:
 *     tags: [accounts]
 *     summary: Retrieve a list of all accounts
 *     responses:
 *       200:
 *         description: A list of accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/accounts'
 * 
 * /getAccounts:
 *   get:
 *     tags: [accounts]
 *     summary: Retrieve a list of active accounts
 *     responses:
 *       200:
 *         description: A list of active accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/accounts'
 * 
 * /getInactiveAccounts:
 *   get:
 *     tags: [accounts]
 *     summary: Retrieve a list of inactive accounts
 *     responses:
 *       200:
 *         description: A list of inactive accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/accounts'
 * 
 * /getAccountsWithAllRecords/{accountId}:
 *   get:
 *     tags: [accounts]
 *     summary: Retrieve an account with all its records
 *     parameters:
 *       - in: path
 *         name: accountId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: An account with all its records
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/accounts'
 * 
 * /getAccountById/{id}:
 *   get:
 *     tags: [accounts]
 *     summary: Retrieve a specific account
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A specific account
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/accounts'
 * 
 * /createAccount:
 *   post:
 *     tags: [accounts]
 *     summary: Create a new account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/accounts'
 *     responses:
 *       200:
 *         description: The created account
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/accounts'
 */