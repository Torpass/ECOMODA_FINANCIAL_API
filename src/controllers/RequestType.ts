import {Request, Response} from 'express'
import RequestTypeModel from '../models/RequestType'
import { matchedData } from "express-validator"

export async function getAllRequestType(_req:Request, res:Response) {
    try{
        const requestsTypes = await RequestTypeModel.findAll({attributes: ['id', 'description', "status"]});

        return res.status(200).send({requestsTypes})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_REQUEST_TYPES')
    }
}

export async function getSelectedRequestType(req:Request, res:Response) {
    try{

        let {statusType} = matchedData(req); 

        const selectedRequests = await RequestTypeModel.findAll({
            where: {
                status: statusType
            }
        })

        return res.status(200).send({selectedRequests})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_REQUEST')
        
    }
}



export async function createRequestType(req:Request, res:Response){    
    try{
        const {description} = matchedData(req);
        const initialStatus = 'Activo'; 

        const requestType = await RequestTypeModel.create({
            description: description, 
            status: initialStatus
        });
        
        return res.status(200).send({requestType})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_CREATING_REQUEST_TYPE')
    }

}

export async function updateRequestType(req:Request, res:Response){    
    try{
        const {id} = req.params;
        const requestTypeExists = await RequestTypeModel.findByPk(id);
        if (!requestTypeExists) return res.status(404).send('ACCOUNT_NOT_FOUND');

        const {description} = matchedData(req);

        const requestType = await RequestTypeModel.update({description}, {where: {id}});
        if(!requestType) return res.status(500).send('ERROR_UPDATING_REQUEST_TYPE');

        return res.status(200).send({
            request_Type: {
                id,
                description
            }
        })
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_UPDATING_REQUEST_TYPE')
    }

}


export async function getRequestTypeById(req:Request, res:Response) {
    try{
        const {id} = req.params;
        const accountExists = await RequestTypeModel.findByPk(id);
        if (!accountExists) return res.status(404).send('REQUEST_TYPE_NOT_FOUND');

        const request_Type = await RequestTypeModel.findOne({
            where: {id},
            attributes: ['id', 'description', "status"],
        });

        return res.status(200).send({request_Type})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_REQUEST_TYPE')
    }
}

export async function deleteRequestType(req:Request, res:Response){    
    try{
        const {id} = req.params;
        const requestTypeExists = await RequestTypeModel.findByPk(id);
        if (!requestTypeExists) return res.status(404).send('ACCOUNT_NOT_FOUND');

        const status = 'Inactivo';

        const requestType = await RequestTypeModel.update({status}, {where: {id}});
        if(!requestType) return res.status(500).send('ERROR_DELETING_REQUEST_TYPE');

        return res.status(200).send({
            request_Type: {
                id,
                status
            }
        })
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_DELETING_REQUEST_TYPE')
    }

}
