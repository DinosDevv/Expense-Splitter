import { Group } from '@expense-splitter/shared/types.js';
import fs from 'fs'

const PATH = 'data/groups.json'

// function checkFolder() {
//   try {
//     if (!fs.existsSync(PATH)) {
//       fs.mkdirSync(PATH);
//       fs.writeFile(entriesPath, JSON.stringify([], null, 2), (err) => {
//         if(err) {
//           console.log(`Error: ${err.message}`)
//         }
//       })
//       fs.writeFile(sessionsPath, JSON.stringify([], null, 2), (err) => {
//         if(err) {
//           console.log(`Error: ${err.message}`)
//         }
//       })
//     }
//   } catch (err) {
//     console.error(err);
//   }

// }

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

