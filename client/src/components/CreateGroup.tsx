import { Group, Participator } from '@expense-splitter/shared/types.ts'
import { useState } from 'react'

export function CreateGroup() {
  const [groupName, setGroupName] = useState("")
  const [partInput, setPartInput] = useState("")
  const [partNames, setPartNames] = useState<string[]>([])
  const [error, setError] = useState("")

  function addParticipator() {
    const name = partInput.trim()
    if (name === "") return
    if (partNames.includes(name)) {
      setError(`${name} is already in the group`)
      return
    }
    setPartNames(prev => [...prev, name])
    setPartInput("")
    setError("")
  }

  async function saveGroup(e: React.FormEvent) {
    e.preventDefault()
    if (groupName.trim() === "" || partNames.length < 2) {
      setError("Need a group name and at least 2 people")
      return
    }

    const group: Group = {
      name: groupName.trim(),
      participators: partNames.map((name): Participator => ({ name, balance: 0 })),
    }

    try {
      const res = await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(group),
      })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      setGroupName("")
      setPartNames([])
    } catch (err) {
      setError(String(err))
    }
  }

  return (
    <form onSubmit={saveGroup}>
      <h1>Create new Group</h1>
      <input
        value={groupName}
        onChange={e => setGroupName(e.target.value)}
        placeholder="Group name (e.g. Budapest trip)"
        required
      />
      <input
        value={partInput}
        onChange={e => setPartInput(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addParticipator() } }}
        placeholder="Participator name"
      />
      <button type="button" onClick={addParticipator}>Add</button>
      <ul>
        {partNames.map(p => <li key={p}>{p}</li>)}
      </ul>
      {error && <p>{error}</p>}
      <button type="submit">Create</button>
    </form>
  )
}