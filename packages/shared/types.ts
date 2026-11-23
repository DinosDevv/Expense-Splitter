export interface Group {
  name: string,
  participators: Participator[
    
  ]
}
export interface Participator {
  name: string,
  balance: number
}
export interface Expense {
  groupName: string,
  name: string,
  description: string,
  amount: number
}
