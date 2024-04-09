import {Request, Response} from 'express'
import AccountModel from '../models/Accounts'
import FinancialRecord from '../models/FinancialRecord';
import { matchedData } from "express-validator"

export async function getAllAcounts(_req:Request, res:Response) {
    try{
        const accounts = await AccountModel.findAll({attributes: ["id", "description", "status"]});

        return res.status(200).send({accounts})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_ACCOUNTS')
    }
}

export async function getAcounts(_req:Request, res:Response) {
    try{
        const accounts = await AccountModel.findAll({
            attributes: ["id", "description", "status"], 
            where: {status: 'activo'}
        });

        return res.status(200).send({accounts})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_ACCOUNTS')
    }
}


export async function getInactiveAccounts(_req:Request, res:Response) {
    try{
        const accounts = await AccountModel.findAll({
            attributes: ["id", "description", "status"], 
            where: {status: 'inactivo'}
        });

        return res.status(200).send({accounts})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_ACCOUNTS')
    }
}

export async function createAccount(req:Request, res:Response){    
    try{
        const {description} = matchedData(req);
        const initialStatus = 'activo';

        const account = await AccountModel.create({
            description:description,
            status: initialStatus
        });
        return res.status(200).send({account})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_CREATING_ACCOUNT')
    }

}

export async function updateAccount(req:Request, res:Response){    
    try{
        const {accountId} = req.params;
        const accountExists = await AccountModel.findOne({where: {id: accountId}});
        if (!accountExists) return res.status(404).send('ACCOUNT_NOT_FOUND');

        const {description, status} = matchedData(req);

        const account = await AccountModel.update({
            description,
            status
        }, {where: {id: accountId}});
        if(!account) return res.status(500).send('ERROR_UPDATING_ACCOUNT');

        return res.status(200).send({
            account: {
                accountId,
                description,
                status
            }
        })
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_UPDATING_ACCOUNT')
    }

}


export async function getAcountById(req:Request, res:Response) {
    try{
        const {id} = req.params;
        const accountExists = await AccountModel.findByPk(id);
        if (!accountExists) return res.status(404).send('ACCOUNT_NOT_FOUND');

        const accounts = await AccountModel.findOne({
            where: {id},
            attributes: ['id', 'description', "status"],
        });

        return res.status(200).send({accounts})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_ACCOUNTS')
    }
}

export async function getAccountWithAllRecords(req:Request, res:Response) {
    try{
        const {accountId} = req.params;
        const accountExists = await AccountModel.findByPk(accountId);
        if (!accountExists) return res.status(404).send('ACCOUNT_NOT_FOUND');

        const accounts = await FinancialRecord.getAccountWithAllRecords(accountId);
        if(!accounts) return res.status(500).send('ERROR_GETING_ACCOUNTS');
        
        return res.status(200).send({accounts})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_ACCOUNTS')
    }
}

export async function deleteAccount(req:Request, res:Response) {
    try{
        const {id} = req.params;
        const accountExists = await AccountModel.findByPk(id);
        if (!accountExists) return res.status(404).send('ACCOUNT_NOT_FOUND');

        const account = await AccountModel.update({status: 'inactivo'}, {where: {id}});
        if(!account) return res.status(500).send('ERROR_DELETING_ACCOUNT');

        return res.status(200).send({
            account: {
                id,
                status: 'inactivo'
            }
        })
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_DELETING_ACCOUNT')
    }
}