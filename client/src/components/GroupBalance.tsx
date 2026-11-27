import { Group } from "@expense-splitter/shared/types"
import './GroupBalance.css'
import { memberColor } from '../memberColors'

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

  const slices = group.participators.map((p, i) => ({
    name: p.name,
    color: memberColor(i),
    share: total > 0 ? (expenseList.get(p.name) ?? 0) / total : 0,
  }))

  // Build a conic-gradient with one segment per member: "color start% end%, ..."
  const segments: string[] = []
  let start = 0
  for (const s of slices) {
    if (s.share === 0) continue
    const end = start + s.share * 100
    segments.push(`${s.color} ${start}% ${end}%`)
    start = end
  }
  const chartBackground = segments.length > 0
    ? `conic-gradient(${segments.join(', ')})`
    : 'var(--surface)'

  return(
    <div className="group_balance">
      <h1>Group Balance</h1>
      <div className="group_balance_body">
        <div className="chart" style={{ background: chartBackground }} />
        <ul className="data">
          {slices.map(s =>
            <li key={s.name}>
              <span className="legend_dot" style={{ backgroundColor: s.color }} />
              <span className="legend_name">{s.name}</span>
              <span className="legend_pct">{Math.round(s.share * 100)}%</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
