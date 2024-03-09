import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import RequestInterface from './interfaces/Request';


class RequestModel extends Model<RequestInterface> implements RequestInterface {
    public id!: number;
    public amount!: number;
    public description!: string;
    public type_id!: number;
    public date!: Date;
    public status!: string;
 
} 
    
RequestModel.init(
    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        description:{
            type: DataTypes.STRING,
        },
        type_id:{
            type: DataTypes.INTEGER,
        },
        status:{
            type: DataTypes.STRING,
        }
    },

    {
        sequelize,
        tableName: "REQUESTS",
        timestamps: true,
    }
);

export default RequestModel;