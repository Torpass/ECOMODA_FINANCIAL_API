import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import AccountsInterface from './interfaces/Accounts';


class AccountModel extends Model<AccountsInterface> implements AccountsInterface{
    public id!: number;
    public description!: string;
    public created_at!: Date;

    // Metodos personalizados
    
}

AccountModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
        },
        created_at: {
            type: DataTypes.DATE,
        }
    },

    {
        sequelize,
        tableName: "ACCOUNTS",
        timestamps: false,
    }
);

export default AccountModel;