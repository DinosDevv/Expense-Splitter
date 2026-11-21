import { Group } from "@expense-splitter/shared/types"
import { useEffect, useState } from "react"
import { Participator } from "./Participator.tsx"

export function GroupForm() {
  const [groups, setGroups] = useState<Group[]>([])
  

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((json) => {
        setGroups(json)
      })
  }, [])

  console.log(groups)

  return groups.length==0 ? (
    <>
      <h1>No availabe groups!</h1>
    </>
  ) : (
    <>
      {groups.map(group => 
        <div>
          <h1>{group.name}</h1>
          <ul>
            {group.participators.map(participator => 
              <Participator name={participator.name} balance={participator.balance} />
            )}
          </ul>
        </div>
      )}
    </>
  )
}