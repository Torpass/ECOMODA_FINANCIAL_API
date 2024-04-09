import { Request, Response, NextFunction } from 'express';
import {check} from 'express-validator';
import validationResults from '../utils/handleValidations';

const ValidatorRegisterRequestType = [
    check('description',"La descripcion no existe en la request")
    .exists()
    .notEmpty(),
    check('description',"La descripcion debe tener minimo 3 caracteres y maximo 256")
    .isLength({ min: 3, max:256 }),
    check('description',"La descripcion debe ser una cadena de caracteres")
    .isString(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export const getRequestTypetByIdValidator = [
    check('id')
    .exists()
    .notEmpty()
    .isInt(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];


export const getSelectedRequestsTypeValidator = [
    check('statusType',"Este campo es requerido o esta vacio")
    .exists()
    .notEmpty(),
    check('statusType',"Type debe ser Activo o Inactivo")
    .isIn(["Activo", "Inactivo"]),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];
export default ValidatorRegisterRequestType;