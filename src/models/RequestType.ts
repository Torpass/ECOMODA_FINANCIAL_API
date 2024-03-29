import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import RequesTypeInterface from './interfaces/RequestType';


class RequestTypeModel extends Model<RequesTypeInterface> implements RequesTypeInterface {
    public id!: number;
    public description!: string;

    // Metodos personalizados
    
}

RequestTypeModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
        },
    },

    {
        sequelize,
        tableName: "REQUESTS_TYPES",
        timestamps: false,
    }
);

export default RequestTypeModel;