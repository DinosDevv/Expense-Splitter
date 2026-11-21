import { Expense } from '@expense-splitter/shared/types.ts'
import { useState } from 'react'


interface ParticipatorProps{
  groupName: string
  name: string
  balance: number
}

export function Participator({ groupName, name, balance } : ParticipatorProps) {
  const [amount, setAmount] = useState("")



  async function handleExpense(e : React.FormEvent)  {
    e.preventDefault()
    const expense : Expense = {
      groupName: groupName,
      name: name,
      amount: Number(amount)
    }
    try {
      const res = await fetch("/api/groups/handleExpense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense)
      })
      if(!res.ok) throw new Error(`Server Responded: ${res.status}`)
      setAmount("")
    } catch (err) {
      console.log(err)
    }

  }

  return(
    <li>
      <form onSubmit={handleExpense}>
        <p>{name}</p>
        <input id="expenseValue" type="number" value={amount} placeholder="Add an Expense" onChange={(e) => setAmount(e.target.value)}/>
        <button type="submit">+</button>
        <p>{balance > 0 ? "Owes" : "Is Owed"} {Math.abs(balance)}</p>
      </form>
    </li>
  )
}