import { Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import FinancialBackgroundInterface from './interfaces/FinancialBackground';


class FinancialBackgroundModel extends Model<FinancialBackgroundInterface > implements FinancialBackgroundInterface {
    public request_id!: number;
    public financial_record_id!: number;
    public readonly createdAt!: Date;

    // Metodos personalizados
}

FinancialBackgroundModel.init(
    {
        request_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        financial_record_id: {
            type: DataTypes.INTEGER,
        },

    },
    {
        sequelize,
        tableName: "FINANCIAL_BACKGROUND",
        timestamps: false,
    }
);


export default FinancialBackgroundModel;