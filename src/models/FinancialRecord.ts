import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import FinancialRecordInterface from './interfaces/FinancialRecord';
import AccountModel from './Accounts';
import FinancialBackgroundModel from './FinancialBackground';

class FinancialRecord extends Model<FinancialRecordInterface> implements FinancialRecordInterface {
    public id!: number;
    public type!: string;
    public description!: string;
    public amount!: number;
    public user_id!: number;
    public account_id!: number;
    public created_at!: Date;

    // Metodos personalizados
    static initializeAssociations(){
        //Relacion entre Account y FinancialRecord, una Account puede tener muchas FinancialRecords y una  FinancialRecords pertenece a una sola Account
        AccountModel.hasMany(FinancialRecord, {foreignKey: 'type_id', });
        FinancialRecord.belongsTo(AccountModel, {foreignKey: 'type_id', as:'Type Request'});

        //Relacion entre FinancialRecord y Request, un FinancialRecord puede tener muchas Request y muchas Request pueden pertenecer a muchas FinancialRecord , esta relacion se hace mediante una tabla intermedia llamada financial_background
        FinancialRecord.belongsToMany(AccountModel, {through: FinancialBackgroundModel, as:'FinancialRecord_Account',foreignKey: 'tienda_id'});
        AccountModel.belongsToMany(FinancialRecord, {through: FinancialBackgroundModel, as: 'Account_FinancialRecord',foreignKey: 'region_id'});
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
        user_id: {
            type: DataTypes.INTEGER,
        },
        account_id:{
            type: DataTypes.INTEGER,
        },
        created_at:{
            type: DataTypes.DATE,
        },

    },

    {
        sequelize,
        tableName: "FINANCIAL_RECORD",
        timestamps: false,
    }
);

export default FinancialRecord;