import { Request, Response, NextFunction } from 'express';
import {check} from 'express-validator';
import validationResults from '../utils/handleValidations';

const ValidatorRegisterAccount = [
    check('description', "description is required")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max:256 })
    .isString(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export const getAccountById = [
    check('id', "id is required")
    .exists()
    .notEmpty()
    .isInt(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export const ValidatorUpdateAccount = [
    check('description', "description is required")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max:256 })
    .isString(),
    check('status', "status is required")
    .exists()
    .notEmpty()
    .isString(),
    check('status', "status in not activo or inactivo, check values")
    .isIn(["activo", "inactivo"]),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export default ValidatorRegisterAccount;