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
  const creditors : Participator[] = []

  for(const participator of participators) {
    if(participator.name != expense.name && participator.balance < 0) {
      creditors.push(participator)
    }
  }

  const creditorBalances : number[] = []

  let amount = expense.amount


  while(amount > 0) {
  
    if(creditors.length > 0) {
      for(const creditor of creditors) {
        creditorBalances.push(creditor.balance)
      }
      const iOfBestCreditor = creditorBalances.indexOf(Math.min.apply(null, creditorBalances))
      
      if(amount > Math.abs(creditors[iOfBestCreditor].balance)) {
        amount -= Math.abs(creditors[iOfBestCreditor].balance)
        creditors[iOfBestCreditor].balance += Math.abs(creditors[iOfBestCreditor].balance)
      } else {
        creditors[iOfBestCreditor].balance += amount
        amount = 0
      }
      // creditors[iOfBestCreditor] += expense
    } else {
      const nonCreditors : Participator[] = []
      for(const participator of participators) {
        if(participator.name != expense.name && !creditors.includes(participator)) {
          nonCreditors.push(participator)
        }
      }
      for(const nonCreditor of nonCreditors) {
        nonCreditor.balance += amount/nonCreditors.length
      }
      amount = 0
    }
    if(amount <= 0) break
  }

  return group
}

export function addExpense(expense : Expense) {
  let group = getGroup(expense.groupName)

  // Each expense is subtracted from the creditor's balance

  for(const participator of group.participators) if(participator.name === expense.name) participator.balance -= expense.amount
  group = settleDebt(group, expense)

  replaceItem(group)

  console.log(`${expense.name}: ${expense.amount}`)
}