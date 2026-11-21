import { Group } from "@expense-splitter/shared/types.ts"
import { Participator } from "./Participator.tsx"

interface GroupProps {
  group: Group
}

export function ExpenseGroup({ group }: GroupProps) {
  return (
    <div>
      <h1>{group.name}</h1>
      <ul>
        {group.participators.map(participator => 
          <Participator groupName={group.name} key={participator.name} name={participator.name} balance={participator.balance} />
        )}
      </ul>
    </div>
  )
}