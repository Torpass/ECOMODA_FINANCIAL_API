import { Request, Response, NextFunction } from 'express';
import {check} from 'express-validator';
import validationResults from '../utils/handleValidations';

const ValidatorRegisterRequest = [
    check('amount',"Este campo es requerido o esta vacio")
    .exists()
    .notEmpty(),
    check('amount',"Este campo es numerico")
    .isNumeric()
    .isFloat({ min: 0 }),
    
    check('description',"Este campo es requerido o esta vacio")
    .exists()
    .notEmpty(),
    check('description',"Este campo debe contener minimo 3 caracteres o maximo 256")
    .isLength({ min: 3, max:256 })
    .isString(),

    check('type_id',"Este campo es requerido o esta vacio")
    .exists()
    .notEmpty(),
    check('type_id',"Este campo de contener un numero entero")
    .isInt(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export const getRequestsById = [
    check('id',"Este campo es requerido o esta vacio")
    .exists()
    .notEmpty(),
    check('id',"Este campo de contener un numero entero")
    .isInt(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export default ValidatorRegisterRequest;