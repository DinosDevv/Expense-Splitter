import { Group } from "@expense-splitter/shared/types"
import { useState, useEffect } from "react"
import { CreateGroup } from "../components/CreateGroup"

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])
  
  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((json) => {
        setGroups(json)
      })
  }, [])
  
  return (
    <div>
      {groups.map(g => 
        <a href={`groups/${g.name}`}>{g.name}</a>
      )}    
      <CreateGroup />

    </div>

  )
}