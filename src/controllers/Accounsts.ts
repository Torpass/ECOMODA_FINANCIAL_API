import {Request, Response} from 'express'
import AccountModel from '../models/Accounts'
import { matchedData } from "express-validator"

export async function getAllAcounts(_req:Request, res:Response) {
    try{
        const accounts = await AccountModel.findAll();

        return res.status(200).send({accounts})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_ACCOUNTS')
    }
}


export async function createAccount(req:Request, res:Response){    
    try{
        const {description} = matchedData(req);

        const account = await AccountModel.create({description});
        return res.status(200).send({account})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_CREATING_ACCOUNT')
    }

}