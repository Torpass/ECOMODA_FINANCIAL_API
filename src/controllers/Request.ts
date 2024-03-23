import {Request, Response} from 'express'
import RequestModel from '../models/Request';
import { matchedData } from 'express-validator';


export async function getAllRequets(_req:Request, res:Response) {
    try{
        const request = await RequestModel.findAll()
      //  const request = await RequestModel.getAllRequest() */       
        return res.status(200).send({request})
        console.log("hola")
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_REQUEST')
        
    }
}

export async function createRequest(req:Request, res:Response) {
    try{
        const {amount,description,type_id} = matchedData(req);
        const status = "En espera";
        
        const request = await RequestModel.create({amount,description,type_id, status});

        return res.status(200).send({request})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_CREATING_REQUEST')
    }
    
}

export async function updateRequest(req:Request, res:Response){    
    try{
        const {id} = req.params;
        const requestExists = await RequestModel.findByPk(id);
        if (!requestExists) return res.status(404).send('REQUEST_NOT_FOUND');

        const {amount,description,type_id} = matchedData(req);

        const request = await RequestModel.update({amount,description,type_id}, {where: {id}});
        if(!request) return res.status(500).send('ERROR_UPDATING_REQUEST');

        return res.status(200).send({
            request: {
                id,
                amount,
                description
            }
        })
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_UPDATING_REQUEST')
    }
}

export async function getRequestById(req:Request, res:Response) {
    try{
        const {id} = req.params;
        const requestExists = await RequestModel.findByPk(id);
        if (!requestExists) return res.status(404).send('REQUEST_NOT_FOUND');

        const request = await RequestModel.findOne({
            where: {id},
            attributes: ['id','amount','description','type_id','createdAt','status'],
        });

        return res.status(200).send({request})
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_GETING_REQUEST')
    }
}

export async function declineRequest(req:Request, res:Response){    
    try{
        const {id} = req.params;
        const requestExists = await RequestModel.findByPk(id);
        if (!requestExists) return res.status(404).send('REQUEST_NOT_FOUND');


        const request = await RequestModel.update({status: "Rechazada"}, {where: {id}});
        if(!request) return res.status(500).send('ERROR_DECLINING_REQUEST');


        return res.status(200).send({
            request: {
                id,
                status: "Rechazada"
            }
        })
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_DECLINING_REQUEST')
    }
}


export async function acceptRequest(req:Request, res:Response){    
    try{
        const {id} = req.params;
        const requestExists = await RequestModel.findByPk(id);
        if (!requestExists) return res.status(404).send('REQUEST_NOT_FOUND');


        const request = await RequestModel.update({status: "Aceptada"}, {where: {id}});
        if(!request) return res.status(500).send('ERROR_ACCEPTING_REQUEST');

        
        return res.status(200).send({
            request: {
                id,
                status: "Aceptada"
            }
        })
    }catch(error:any){
        console.log(error);
        return res.status(500).send('ERROR_DECLINING_REQUEST')
    }
}