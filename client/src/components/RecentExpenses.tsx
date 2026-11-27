import { Expense } from '@expense-splitter/shared/types'
import './RecentExpenses.css'
import { eurFormatter } from '@expense-splitter/shared/helpers'

interface compProps {
  expenses: Expense[]
}

export function RecentExpenses({ expenses } : compProps) {
  // Newest first
  const recent = expenses.slice(-4).reverse()

  return(
    <div className="recent_expenses">

      <div className="expense_top">
        <h1>Recent Expenses</h1>
        <a href="#">See all →</a>
      </div>
      {recent.length === 0 && <p className="expense_empty">No expenses yet</p>}
      {recent.map((e, i) =>
        <div key={`${e.description}-${i}`} className="expense_item">
          <div className="expense_badge">{e.description[0]?.toUpperCase() ?? '?'}</div>
          <div className="left">
            <p className="expense_name">{e.description}</p>
            <p className="paidby_text">Paid by {e.paidBy}</p>
          </div>
          <div className="right">
            <p className="expense_amount_text">{eurFormatter.format(e.amount/100)}</p>
            <span className="expense_chevron">›</span>
          </div>
        </div>
      )}
    </div>
  )
}
