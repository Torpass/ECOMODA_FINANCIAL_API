export default interface Request{
    id?: number;
    amount: number;
    description: string;
<<<<<<< Updated upstream
    user_id: number;
    type_id: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
=======
    user_id?: number;
    type_id?: number;
    date?: Date;
    status?: string;
>>>>>>> Stashed changes
}