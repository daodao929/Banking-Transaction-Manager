import { Transaction } from '../types';
import { BASE_URL } from '../config';

export const api = {
  async getTransactions(): Promise<Transaction[]> {
    const response = await fetch(`${BASE_URL}/transactions`);
    if (!response.ok) throw new Error('Failed to fetch transactions');
    return response.json();
  },

  async createTransaction(transaction: Omit<Transaction, 'id' | 'date'>): Promise<Transaction> {
    const response = await fetch(`${BASE_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });
    if (!response.ok) throw new Error('Failed to create transaction');
    return response.json();
  },

  async updateTransaction(id: number, transaction: Partial<Transaction>): Promise<Transaction> {
    const response = await fetch(`${BASE_URL}/transactions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });
    if (!response.ok) throw new Error('Failed to update transaction');
    return response.json();
  },

  async deleteTransaction(id: string) {
    const response = await fetch(`${BASE_URL}/transactions/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete transaction');
    }
  }
}; 