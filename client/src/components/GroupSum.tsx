import { Group } from "@expense-splitter/shared/types"
import './GroupSum.css'

interface compProps {
  group: Group
}

export function GroupSum({group} : compProps) {

  let total : number = 0
  for(const expense of group.expenses) {
    total += expense.amount
  }


  return(
    <div className="group_sum">
      <div className="left">
        <h1>{group.name}</h1>
        <p>{group.participators.length} members</p>
        <h1>€{total/100}</h1>
        <p>Total Group expenses</p>
      </div>
      <div className="right">
        <button>View Details →</button>
      </div>
    </div>
  )
}