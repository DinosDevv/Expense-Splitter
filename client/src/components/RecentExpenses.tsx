import './RecentExpenses.css'

export function RecentExpenses() {
  return(
    <div className="recent_expenses">
      
      <div className="expense_top">
        <h1>Recent Expenses</h1>
        <a href="#">See all →</a>
      </div>
      <div className="expense_item">
        <div className="left">
          <p>Pizza</p>
          <p className="paidby_text">Paid by: Nosdi</p>
        </div>
        <div className="right">
          <p>€32.44</p>
        </div>
      </div>
      <div className="expense_item">
        <div className="left">
          <p>Pizza</p>
          <p className="paidby_text">Paid by: Nosdi</p>
        </div>
        <div className="right">
          <p>€32.44</p>
        </div>
      </div>
      <div className="expense_item">
        <div className="left">
          <p>Pizza</p>
          <p className="paidby_text">Paid by: Nosdi</p>
        </div>
        <div className="right">
          <p>€32.44</p>
        </div>
      </div>
      <div className="expense_item">
        <div className="left">
          <p>Pizza</p>
          <p className="paidby_text">Paid by: Nosdi</p>
        </div>
        <div className="right">
          <p>€32.44</p>
        </div>
      </div>
      
    </div>
  )
}