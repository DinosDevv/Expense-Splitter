import { Expense, Group, Participator } from '@expense-splitter/shared/types.js'
import { readFile, replaceItem, writeFile } from '../db/groupStore.js'

export function createGroup(group: Group) {
  writeFile(group)
}
export function getGroups() {
  return readFile()
}
function getGroup(groupName : string) {
  const groups = readFile()

  for(const group of groups) {
    if(group.name == groupName) return group
  }
}
function settleDebt(group: Group, expense: Expense) : Group{
  const participators : Participator[] = group.participators

  // Everyone gets his share

  for(const participator of participators) participator.balance += Math.round(expense.amount / participators.length)

  return group
}

export function addExpense(expense : Expense) {
  let group = getGroup(expense.groupName)
  group.expenses.push(expense)

  // Each expense is subtracted from the creditor's balance

  for(const participator of group.participators) if(participator.name === expense.name) participator.balance -= expense.amount
  group = settleDebt(group, expense)

  replaceItem(group)

  console.log(`${expense.name}: ${expense.amount}`)
}