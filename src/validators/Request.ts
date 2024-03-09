import { Request, Response, NextFunction } from 'express';
import {check} from 'express-validator';
import validationResults from '../utils/handleValidations';

const ValidatorRegisterRequest = [
    check('amount')
    .exists()
    .notEmpty()
    .isNumeric()
    .isFloat({ min: 0 }),
    
    check('description')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max:256 })
    .isString(),
    
    check('type_id')
    .exists()
    .notEmpty()
    .isInt(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export const getRequestsById = [
    check('id')
    .exists()
    .notEmpty()
    .isInt(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export default ValidatorRegisterRequest;