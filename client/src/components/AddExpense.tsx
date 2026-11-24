import './AddExpense.css'
import { Group } from '@expense-splitter/shared/types'
import { useState } from "react"

interface AddExpenseProps {
  group: Group
  onAdded: () => void
}

export function AddExpense({ group, onAdded }: AddExpenseProps) {
  const [description, setDescription] = useState("")
  const [amountInput, setAmountInput] = useState("")
  const [payer, setPayer] = useState("")
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  const amountCents = Math.round(Number(amountInput) * 100)
  const validAmount = Number.isFinite(amountCents) && amountCents > 0

  async function handleExpense(e: React.FormEvent) {
    e.preventDefault()
    if (!validAmount) return setError("Enter an amount above 0")
    if (!payer) return setError("Pick who paid")

    setSaving(true)
    setError("")
    try {
      const res = await fetch(`/api/groups/handleExpense`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          groupName: group.name,
          paidBy: payer,
          description: description.trim(),
          amount: amountCents,
        }),
      })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      setDescription("")
      setAmountInput("")
      setPayer("")
      onAdded()
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setSaving(false)
    }
  }

  return(
    <form onSubmit={handleExpense} className="add-expense">
      <div className="expense_div">
        <h1>Add Expense</h1>

        <div className="expense_description">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="e.g. Dinner, Uber, Tickets..."
          />
        </div>

        <div className="expense_amount">
          <label htmlFor="amount">Amount (€)</label>
          <input
            id="amount"
            type="number"
            step="0.01"
            min="0.01"
            value={amountInput}
            onChange={e => setAmountInput(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>

        <div className="expense_payer">
          <label htmlFor="payer">Paid by</label>
          <select id="payer" value={payer} onChange={e => setPayer(e.target.value)} required>
            <option value="" disabled>Who paid?</option>
            {group.participators.map(p => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>

        <fieldset className="split_between">
          <legend>Split between</legend>
          <button type="button">Everyone (Equally)</button>
          <button type="button" disabled>Custom Amounts</button>
          <button type="button" disabled>Percentages</button>
        </fieldset>

        {error && <p className="error">{error}</p>}
        <button className="expense_button" type="submit" disabled={saving}>
          {saving ? "Adding…" : "Add Expense"}
        </button>
      </div>
      <div className="preview_div">
        <label htmlFor="preview">Preview</label>
        <div className="item">
          <p>{description}</p>
          <p>{amountCents / 100}</p>
        </div>
        <p>Each Person will pay: {Math.round(amountCents / group.participators.length) / 100}</p>
      </div>
    </form>
  )
}