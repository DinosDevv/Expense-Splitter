import { Group } from "@expense-splitter/shared/types"
import './GroupBalance.css'

interface compProps {
  group: Group
}

export function GroupBalance({ group } : compProps) {
  return(
    <div className="group_balance">
      <h1>Group Balance</h1>
      <div className="chart">
        <p>chart</p>
      </div>
      <div className="data">
        <ul>
          {group.participators.map(p => 
            <li key={p.name}>{p.name}</li>
          )}
        </ul>
      </div>
    </div>
  )
}