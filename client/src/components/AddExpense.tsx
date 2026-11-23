import './AddExpense.css'
import { Group } from '@expense-splitter/shared/types'

interface compProps {
  group: Group
}

export function AddExpense({ group } : compProps) {
  return(
    <div className="add-expense">
      <div className="left">
        <h1>Add Expense</h1>
        
        <div>
          <label htmlFor='description'>Description</label>
          <input type="text" id="description" placeholder='e.g. Dinner, Uber, Tickets...'/>          
        </div>

        <div>
          <label htmlFor="amount">Amount (€)</label>
          <input type="number" placeholder='0.00'/>
        </div>

        <div>
          <label htmlFor="payer">Paid by</label>
          <select name="payer" id="payer">
            {group.participators.map(p => 
              <option key={p.name} value={p.name}>{p.name}</option>
            )}
          </select>
        </div>

        <div>
          <label htmlFor="split">Split Between</label>
          <div id="split">
            <button>Everyone (Equally)</button>
            <button>Custom Amounts</button>
            <button>Percentages</button>
          </div>
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