import { Group } from '@expense-splitter/shared/types.js'
import { readFile, writeFile } from '../db/groupStore.js'

export function createGroup(group: Group) {
  writeFile(group)
}
export function getGroups() {
  return readFile()
}
export function addExpense(name : string, amount: number) {
  console.log(`${name}: ${amount}`)
}