import { Expense, Group } from '@expense-splitter/shared/types.js'
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

export function addExpense(expense : Expense) {
  const group = getGroup(expense.groupName)
  const numberOfParticipators = group.participators.length
  const expenseDivided = expense.amount / numberOfParticipators

  for(const participator of group.participators) {
    if(participator.name == expense.name) participator.balance += expenseDivided
    else participator.balance -= expenseDivided
  }

  replaceItem(group)

  console.log(`${expense.name}: ${expense.amount}`)
}