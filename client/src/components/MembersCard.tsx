import { Group } from "@expense-splitter/shared/types"
import './MembersCard.css'
import { useState, useEffect } from "react"

interface compProps {
  group: Group
}

export function MembersCard({ group } : compProps) {
  const [balances, setBalances] = useState<{name: string, balance: number}[]>([])
  
  useEffect(() => {
    fetch(`/api/groups/balances/${group.name}`)
      .then((res) => res.json())
      .then((json) => {
        setBalances(json)
      })
  }, [group.name])
  

  return(
    <>
      <div className="members-card">
        <h1>Members</h1>
        <ul>
          {balances.map(b => 
            <li key={b.name}>
              <p>{b.name}</p>
              <p>{b.balance < 0 ? "Is owed" : "Owes"} {Math.abs(b.balance / 100)}€</p>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}