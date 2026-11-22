import { Group } from '@expense-splitter/shared/types.js';
import fs from 'fs'

const PATH = 'data/groups.json'

export function readFile() {
  try {
    const data = fs.readFileSync(`${PATH}`, 'utf8')
    return JSON.parse(data)
  } catch (err) {
    console.log(`Error: ${err}`)
    return []
  }
}
export function writeFile(content: Group) {
  let dataToStore = readFile()
  dataToStore.push(content)
  try{
    fs.writeFile(`${PATH}`, JSON.stringify(dataToStore, null, 2), (err) => {
      if(err) {
        console.log(`Error: ${err.message}`)
        return false
      }
    })
  } catch(err) {
    console.log(err)
  }
}
export function replaceItem(group: Group) {
  let dataToStore = readFile()

  for(const item of dataToStore) {
    if(item.name == group.name) {
      const index = dataToStore.indexOf(item)
      if(index > -1) {
        dataToStore.splice(index, 1)
        dataToStore.push(group)
      }
    }
  }
  try {
    fs.writeFile(`${PATH}`, JSON.stringify(dataToStore, null, 2), (err) => {
      if(err) {
        console.log(`Error: ${err.message}`)
        return false
      }
    })
  } catch(err) {
    console.log(err)
  }
}

