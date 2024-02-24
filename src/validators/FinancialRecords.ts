import { Request, Response, NextFunction } from 'express';
import {check} from 'express-validator';
import validationResults from '../utils/handleValidations';

const createFinancialRecordValidator = [
    check('type')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max:256 })
    .isString()
    .isIn(['DEBE', 'HABER']),
    check('description')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max:256 })
    .isString(),
    check('amount')
    .exists()
    .notEmpty()
    .isInt(),
    // check('user_id')
    // .exists()
    // .notEmpty()
    // .isInt(),
    check('account_id')
    .exists()
    .notEmpty()
    .isInt(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export const getRecordById = [
    check('id')
    .exists()
    .notEmpty()
    .isInt(),
    (req:Request, res:Response, next:NextFunction) => {
        return validationResults(req, res, next)
    }
];

export default createFinancialRecordValidator;