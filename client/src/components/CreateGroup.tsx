import { Group } from '@expense-splitter/shared/types.ts'
import { useState } from 'react'
import './CreateGroup.css'
import { memberColor } from '../memberColors'

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
      participators: partNames.map(name => ({ name })),
      expenses: []
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
    <form className="create_group" onSubmit={saveGroup}>
      <h1><span className="create_group_icon">+</span> Create new Group</h1>

      <div className="create_group_field">
        <label htmlFor="group_name">Group name</label>
        <input
          id="group_name"
          value={groupName}
          onChange={e => setGroupName(e.target.value)}
          placeholder="e.g. Budapest trip"
          required
        />
      </div>

      <div className="create_group_field">
        <label htmlFor="participator">Members</label>
        <div className="create_group_add">
          <input
            id="participator"
            value={partInput}
            onChange={e => setPartInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addParticipator() } }}
            placeholder="Participator name"
          />
          <button type="button" className="create_group_add_btn" onClick={addParticipator}>Add</button>
        </div>
      </div>

      {partNames.length > 0 && (
        <ul className="create_group_members">
          {partNames.map((p, i) => (
            <li key={p}>
              <span className="create_group_avatar" style={{ backgroundColor: memberColor(i) }}>{p[0]}</span>
              {p}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="create_group_error">{error}</p>}
      <button type="submit" className="create_group_submit">Create Group</button>
    </form>
  )
}
