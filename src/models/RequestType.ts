import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import RequesTypeInterface from './interfaces/RequestType';


class RequestTypeModel extends Model<RequesTypeInterface> implements RequesTypeInterface {
    public id?: number;
    public description!: string;
    public status!: string;
    // Metodos personalizados
    
}

RequestTypeModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
        },
        status:{
            type: DataTypes.ENUM('activo', 'inactivo'),
            defaultValue: 'activo',
        }
    },

    {
        sequelize,
        tableName: "REQUESTS_TYPES",
        timestamps: false,
    }
);

export default RequestTypeModel;