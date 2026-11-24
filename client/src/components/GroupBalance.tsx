import { Group } from "@expense-splitter/shared/types"
import './GroupBalance.css'

interface compProps {
  group: Group
}

export function GroupBalance({ group } : compProps) {
  const expenseList = new Map<string, number>()
  let total = 0

  for (const expense of group.expenses) {
    total += expense.amount
    const current = expenseList.get(expense.paidBy) ?? 0
    expenseList.set(expense.paidBy, current + expense.amount)
  }


  return(
    <div className="group_balance">
      <h1>Group Balance</h1>
      <div className="chart">
        <p>chart</p>
      </div>
      <div className="data">
        <ul>
          {group.participators.map(p => 
            <li key={p.name}>
              {p.name} {Math.round(((expenseList.get(p.name) ?? 0) / total) * 100)}%
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}