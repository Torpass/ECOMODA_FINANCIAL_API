import {Request, Response} from 'express'
import FianacialRecordModel from '../models/FinancialRecord'
import AccountModel from '../models/Accounts'
import { matchedData } from "express-validator"

export async function getAllFinancialRecords(_req:Request, res:Response) {
    try{
        const financialRecords = await FianacialRecordModel.getAllFinancialRecords();

        return res.status(200).send({accounts})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_ACCOUNTS')
    }
}

export async function createFinancialRecord(req:Request, res:Response) {
    try{
        const {type,description,amount,account_id} = matchedData(req);

        const accountExists = await AccountModel.findByPk(account_id);
        if (!accountExists) return res.status(404).send('INVALID_ACCOUNT_ID');

        const financialRecord = await FianacialRecordModel.create({
            type,
            description,
            amount,
            account_id
        },
        {
            fields: ['type', 'description', 'amount', 'account_id']
        }
        );


        return res.status(200).send({financialRecord})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_ACCOUNTS')
    }
}

