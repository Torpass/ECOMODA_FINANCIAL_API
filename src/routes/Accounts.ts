import express from 'express';
import {createAccount} from '../controllers/Accounsts';
import createAccountValidator from '../validators/Accounts';
const router = express.Router();

//get all accounts from the Account table
router.get("/getAllAccounts");

//get an a specific account from the Account table
router.get("/getAccount/:id");

//create a new account in the Account table
router.post("/createAccount", 
            createAccountValidator,
            createAccount);

//delete an account from the Account table
router.delete("/deleteAccount/:id");

//update an account in the Account table
router.put("/updateAccount/:id");

module.exports = router;
