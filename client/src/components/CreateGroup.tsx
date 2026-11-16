export function CreateGroup() {
  const participators : string[] = []

  function addParticipator() {
    const partInp = document.getElementById('partInp') as HTMLInputElement

    if(partInp.value != "") participators.push(partInp.value)
    partInp.value = ""


    console.log(participators)
  }

  async function saveGroup (e: React.FormEvent) {
    e.preventDefault()

    const groupName = (document.getElementById('groupName') as HTMLInputElement).value
    console.log("Kaka")

    if(groupName != "" && participators.length > 1) {
      const res = await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ok: "ok"}),
      })
      if(!res.ok) res.json()
      const newGroup = await res.json()
      console.log(newGroup)
    }
  }


  return(
    
    <form onSubmit={saveGroup}>
      <h1>Create new Group</h1>
      <input id="groupName" type="text" placeholder="Group name (e.g. Budapest trip)" required/>
      <input id="partInp" type="text" placeholder="Participator Name" required/>
      <button onClick={() => addParticipator()}>Add</button>
      <ul>
        <li>Participator 1</li>
        <li>Participator 2</li>
      </ul>
      <button type="submit">Create</button>
    </form>
  )
}