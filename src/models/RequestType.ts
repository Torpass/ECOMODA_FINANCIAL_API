import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import RequesTypeInterface from './interfaces/RequestType';


class RequestTypeModel extends Model<RequesTypeInterface> implements RequesTypeInterface {
    public id!: number;
    public descrption!: string;

    // Metodos personalizados
    
}

RequestTypeModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        descrption: {
            type: DataTypes.STRING,
        },
    },

    {
        sequelize,
        tableName: "REQUEST_TYPE",
        timestamps: false,
    }
);

export default RequestTypeModel;