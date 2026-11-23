import { Group } from "@expense-splitter/shared/types"
import { useState, useEffect } from "react"

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
    <>
      {groups.map(g => 
        <a href={`groups/${g.name}`}>{g.name}</a>
      )}    
    </>
  )
}