import { Expense } from '@expense-splitter/shared/types'
import './RecentExpenses.css'
import { eurFormatter } from '@expense-splitter/shared/helpers'

interface compProps {
  expenses: Expense[]
}

export function RecentExpenses({ expenses } : compProps) {
  return(
    <div className="recent_expenses">
      
      <div className="expense_top">
        <h1>Recent Expenses</h1>
        <a href="#">See all →</a>
      </div>
      {expenses.slice(-4).map(e => 
        <div key={e.description} className="expense_item">
          <div className="left">
            <p>{e.description}</p>
            <p className="paidby_text">Paid by: {e.paidBy}</p>
          </div>
          <div className="right">
            <p>{eurFormatter.format(e.amount/100)}</p>
          </div>
        </div>
      )}
    </div>
  )
}