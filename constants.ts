
import type { Source, Category } from './types';

export const INITIAL_SOURCES: Source[] = [
  { id: 'b1', name: 'Bank 1', icon: 'landmark' },
  { id: 'b2', name: 'Bank 2', icon: 'landmark' },
  { id: 'wallet', name: 'Wallet', icon: 'wallet' },
  { id: 'other', name: 'Others', icon: 'circle-dollar-sign' },
];

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'food', name: 'Food', icon: 'utensils' },
  { id: 'rent', name: 'Rent', icon: 'home' },
  { id: 'travel', name: 'Travel', icon: 'car' },
  { id: 'shopping', name: 'Shopping', icon: 'shopping-bag' },
  { id: 'utilities', name: 'Utilities', icon: 'lightbulb' },
  { id: 'entertainment', name: 'Entertainment', icon: 'film' },
  { id: 'health', name: 'Health', icon: 'heart-pulse' },
  { id: 'other', name: 'Other', icon: 'circle-dollar-sign' },
];
