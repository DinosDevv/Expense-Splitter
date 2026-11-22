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
  // Examine whether there are other creditors

  const creditors : Participator[] = []
  for(const participator of group.participators) {
    if(participator.balance < 0) {
      creditors.push(participator)
    }
  }

  // If yes: Find the best creditor by implementing a greedy algorithm that finds the min of balances

  if(creditors.length > 0) {
    let amount : number = expense.amount

    while(amount > 0) {
      const balances : number[] = []
      for(const creditor of creditors) {
        balances.push(creditor.balance)
      }
      const iOfBestCreditor = balances.indexOf(Math.min.apply(null, balances))
      if(Math.abs(creditors[iOfBestCreditor].balance) >= amount) {
        creditors[iOfBestCreditor].balance += amount
        amount = 0
        break
      } else {
        const tempAmount = amount
        amount -= Math.abs(creditors[iOfBestCreditor].balance)
        creditors[iOfBestCreditor].balance += tempAmount
      }
    }

  } else {
    // If no: Increase each debtor's balance by expense amount / participators.length - 1
    for(const participator of group.participators) {
      if(participator.name != expense.name) {
        participator.balance += expense.amount / (group.participators.length - 1)
      }
    }
  }
  return group
}

export function addExpense(expense : Expense) {
  let group = getGroup(expense.groupName)

  // Each expense is subtracted from the creditor's balance

  for(const participator of group.participators) if(participator == expense.name) participator.balance -= expense.amount
  group = settleDebt(group, expense)

  replaceItem(group)

  console.log(`${expense.name}: ${expense.amount}`)
}