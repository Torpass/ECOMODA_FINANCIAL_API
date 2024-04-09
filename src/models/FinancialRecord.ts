import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import FinancialRecordInterface from './interfaces/FinancialRecord';
import AccountModel from './Accounts';
import FinancialBackgroundModel from './FinancialBackground';
// import FinancialBackgroundModel from './FinancialBackground';

    class FinancialRecord extends Model<FinancialRecordInterface> implements FinancialRecordInterface {
        public id!: number;
        public type!: string;
        public description!: string;
        public amount!: number;
        // public user_id!: number;
        public account_id!: number;
        readonly createdAt!: Date;
        readonly updatedAt!: Date;

        // Metodos personalizados
        static initializeAssociations(){
            //Relacion entre Account y FinancialRecord, una Account puede tener muchas FinancialRecords y una  FinancialRecords pertenece a una sola Account
            AccountModel.hasMany(FinancialRecord, {foreignKey: 'account_id', as: "Financial_account"});
            FinancialRecord.belongsTo(AccountModel, {foreignKey: 'account_id', as: "Financial_account"});

            //Relacion entre FinancialRecord y Request, un FinancialRecord puede tener muchas Request y muchas Request pueden pertenecer a muchas FinancialRecord , esta relacion se hace mediante una tabla intermedia llamada financial_background
            FinancialRecord.belongsToMany(AccountModel, {through: FinancialBackgroundModel, as:'FinancialRecord_Account',foreignKey: 'tienda_id'});
            AccountModel.belongsToMany(FinancialRecord, {through: FinancialBackgroundModel, as: 'Account_FinancialRecord',foreignKey: 'region_id'});
        }

        static async getAllFinancialRecords(){
            try{
                const financialRecords = await FinancialRecord.findAll({
                    attributes: ['id',"type",'description', 'amount', 'account_id', 'createdAt'],
                    include: [
                        { 
                            model: AccountModel, 
                            as: 'Financial_account',
                            attributes: ['id', 'description'],
                        },
                    ]
                });

                if(!financialRecords) throw new Error('NO_RECORDS_FOUND');

                return financialRecords;
            }catch(error:any){
                console.log(error);
                return null;
            }
        }

        static async getAccountWithAllRecords(accountId:string | undefined){
            if(!accountId) return null;
            try{
                const accounts = await AccountModel.findAll({
                    attributes: ['id', 'description'],
                    where: {id: accountId},
                    include: [
                        { 
                            model: FinancialRecord, 
                            as: 'Financial_account',
                            attributes: ['id', 'type', 'description', 'amount', 'createdAt'],
                        },
                    ]
                });
    
                if(!accounts) throw new Error('NO_ACCOUNTS_FOUND');
    
                return accounts;
            }catch(error:any){
                console.log(error);
                return null;
            }
        }
    }

FinancialRecord.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        type:{
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        // },
        account_id:{
            type: DataTypes.INTEGER,
        },
       

    },
    {
        sequelize,
        tableName: "FINANCIAL_RECORD",
        timestamps: true,
    }
);

FinancialRecord.initializeAssociations();

export default FinancialRecord;