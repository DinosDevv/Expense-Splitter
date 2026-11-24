import { Expense, Group, Participator } from '@expense-splitter/shared/types.js'
import { readFile, replaceItem, writeFile } from '../db/groupStore.js'

export function createGroup(group: Group) {
  writeFile(group)
}
export function getGroups() {
  return readFile()
}
export function getGroup(groupName : string) {
  const groups = readFile()

  for(const group of groups) {
    if(group.name == groupName) return group
  }
}

export function calculateBalances(group: Group) : Map<string, number> {
  const balances = new Map(group.participators.map(p => [p.name, 0]))
  const n = group.participators.length

  for(const e of group.expenses) {
    const share = Math.floor(e.amount / n) 
    let remainder = e.amount - share * n
    for(const p of group.participators) {
      const extra = remainder-- > 0 ? 1 : 0
      balances.set(p.name, balances.get(p.name)! + share + extra)
    }
    balances.set(e.paidBy, balances.get(e.paidBy)! - e.amount)
  }
  return balances
}
export function addExpense(expense : Expense) {
  let group = getGroup(expense.groupName)
  group.expenses.push(expense)

  replaceItem(group)

  console.log(`${expense.paidBy}: ${expense.amount}`)
}