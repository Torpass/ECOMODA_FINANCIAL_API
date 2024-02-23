import { Request, Response, NextFunction } from 'express';
import {check} from 'express-validator';
import validationResults from '../utils/handleValidations';

const ValidatorRegisterAccount = [
    check('description')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max:256 })
    .isString(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export const getAccountById = [
    check('id')
    .exists()
    .notEmpty()
    .isInt(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export default ValidatorRegisterAccount;