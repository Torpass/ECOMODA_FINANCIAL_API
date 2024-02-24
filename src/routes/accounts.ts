import express from 'express';
import {createAccount, getAllAcounts, updateAccount, getAcountById} from '../controllers/Accounsts';
import {getAccountWithAllRecords} from '../controllers/Accounsts';
import accountValidator from '../validators/Accounts';
import {getAccountById} from '../validators/Accounts';
const router = express.Router();

//get all accounts from the Account table
router.get("/getAllAccounts",
            getAllAcounts);

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
router.delete("/deleteAccount/:id");

//update an account in the Account table
router.put("/updateAccount/:accountId",
            accountValidator,
            updateAccount);

module.exports = router;
