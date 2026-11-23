import { Group } from "@expense-splitter/shared/types"

interface compProps {
  group: Group
}

export function MembersCard({ group } : compProps) {
  return(
    <>
      <div className="members-card">
        <h1>Members</h1>
        <ul>
          {group.participators.map(p => 
            <li key={p.name}>
              <p>{p.name}</p>
              <p>{p.balance / 100}€</p>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}