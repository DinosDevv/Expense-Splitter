import { addToFile, readFile } from "../api/jsonActions.ts"

export function CreateGroup() {
  const participators : string[] = []

  function addParticipator() {
    const partInp = document.getElementById('partInp') as HTMLInputElement

    if(partInp.value != "") participators.push(partInp.value)
    partInp.value = ""


    console.log(participators)
  }

  function saveGroup () {
    const groupName = (document.getElementById('groupName') as HTMLInputElement).value

    if(groupName != "" && participators.length > 1) {
      addToFile('../data/groups.json', {})
    }
  }


  return(
    <>
      <h1>Create new Group</h1>
      <input id="groupName" type="text" placeholder="Group name (e.g. Budapest trip)" required/>
      <input id="partInp" type="text" placeholder="Participator Name" required/>
      <button onClick={() => addParticipator()}>Add</button>
      <ul>
        <li>Participator 1</li>
        <li>Participator 2</li>
      </ul>
      <button onClick={() => saveGroup()}>Create</button>
    </>
  )
}