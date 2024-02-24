import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import AccountsInterface from './interfaces/Accounts';

class AccountModel extends Model<AccountsInterface> implements AccountsInterface{
    public id!: number;
    public description!: string;

    //timeStamps
    public createdAt!: Date;
    public updatedAt!: Date;
    
    // Metodos personalizados
   
}

AccountModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    },

    {
        sequelize,
        tableName: "ACCOUNTS",
        timestamps: true,
    }
);

export default AccountModel;