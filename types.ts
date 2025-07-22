
export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
  TRANSFER = 'TRANSFER',
}

export interface Transaction {
  id: string;
  type: TransactionType;
  sourceId: string; // The account this transaction belongs to
  amount: number; // Always positive. Type determines if it's +/-
  description: string;
  date: string; // ISO string
  categoryId?: string; // For expenses
  notes?: string;
  transferId?: string; // Links two transfer transactions
}

export interface Source {
  id: string;
  name: string;
  icon: string;
}

export interface Category {
  id:string;
  name: string;
  icon: string;
}
