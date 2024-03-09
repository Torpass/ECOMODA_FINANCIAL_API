import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import RequestTypeModel from './RequestType';
import RequestInterface from './interfaces/Request';


class RequestModel extends Model<RequestInterface> implements RequestInterface {
    public id!: number;
    public amount!: number;
    public description!: string;
    public user_id!: number;
    public type_id!: number;
    public date!: Date;
    public status!: string;

    // Metodos personalizados
    static initializeAssociations(){
        //Relacion entre RequestType y Request, una RequestType puede tener muchas Request y una Request pertenece a una sola RequestType
        RequestTypeModel.hasMany(RequestModel, {foreignKey: 'type_id', as: 'RequestSolicitude' });
        RequestModel.belongsTo(RequestTypeModel, {foreignKey: 'type_id', as:'Type Request'});

    }
    static async getAllRequest(){
        try{
            const request = await RequestModel.findAll({
                attributes: ['id','amount','description','user_id','type_id','date','status'],
                include: [
                    { 
                        model: RequestTypeModel, 
                        as: 'Type Request',
                        attributes: ['id','description'],
                    },
                ]
            });
    
            if(!request) throw new Error('NO_REQUEST_FOUND');
    
            return request;
        }catch(error:any){
            console.log(error);
            return null;
        }
    }
    static async getAllRequestFromRequestType(requestId:string) {

        const requestType = await RequestTypeModel.findAll({
            attributes:['id', 'description'], 
            where:{id:requestId}, 
            include:[
                {
                    model: RequestModel,
                    attributes:['id','amount','description','user_id','type_id','date','status'],
                    as: 'RequestSolicitude'
                }
            ] 
        
        })
        return requestType;
        
    }
}

    
RequestModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        description:{
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        type_id:{
            type: DataTypes.INTEGER,
        },
        date:{
            type: DataTypes.DATE,
        },
        status:{
            type: DataTypes.STRING,
        }
    },

    {
        sequelize,
        tableName: "REQUESTS",
        timestamps: false,
    }
);

export default RequestModel;