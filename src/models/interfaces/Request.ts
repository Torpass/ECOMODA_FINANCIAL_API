export default interface Request{
    id?: number;
    amount: number;
    description: string;
    user_id: number;
    type_id: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}