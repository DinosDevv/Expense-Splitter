export interface Group {
  name: string,
  participators: Participator[
    
  ],
  expenses: Expense [
    
  ]
}
export interface Participator {
  name: string,
}
export interface Expense {
  groupName: string,
  paidBy: string,
  description: string,
  amount: number
}
