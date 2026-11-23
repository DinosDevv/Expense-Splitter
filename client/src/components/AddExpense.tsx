import './AddExpense.css'

export function AddExpense() {
  return(
    <div className="add-expense">
      <div className="left">
        <h1>Add Expense</h1>
        
        <label htmlFor='description'>Description</label>
        <input type="text" id="description" placeholder='e.g. Dinner, Uber, Tickets...'/>

        <label htmlFor="amount">Amount (€)</label>
        <input type="number" placeholder='0.00'/>

        <label htmlFor="payer">Paid by</label>
        <select name="payer" id="payer">
          <option value="guy1">Guy 1</option>
          <option value="guy2">Guy 2</option>
        </select>

        <label htmlFor="split">Split Between</label>
        <div id="split">
          <button>Everyone (Equally)</button>
          <button>Custom Amounts</button>
          <button>Percentages</button>
        </div>

        <button>Add Expense</button>
      </div>
      <div className="right">
        <label htmlFor="preview">Preview</label>
        <div className="item">
          <p>Pizza</p>
          <p>32.00€</p>
        </div>
        <p>Each Person will pay: 67.00€</p>
      </div>
    </div>
  )
}