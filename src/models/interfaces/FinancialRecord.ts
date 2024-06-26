export default interface FinancialRecord{
    id?: number;
    type: string;
    description: string;
    amount: number;
    // user_id: number;
    account_id: number;
    createdAt?: Date;
    updatedAt?: Date;
}