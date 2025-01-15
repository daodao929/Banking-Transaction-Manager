// Define the transaction types and result types as enums or string literals
export type TransactionType = 'PAYMENT' | 'REFUND';
export type TransactionResult = 'PENDING' | 'COMPLETED' | 'FAILED';

export interface Transaction {
  transactionId: string;
  transactionType: TransactionType;
  amount: number;
  currency: string;
  result: TransactionResult;
}

export interface PageResponse {
  content: Transaction[];
  totalPages: number;
  number: number;
}