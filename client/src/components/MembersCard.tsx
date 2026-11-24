import './MembersCard.css'
import { eurFormatter } from '@expense-splitter/shared/helpers'

interface compProps {
  balances: {name: string, balance: number}[]
}

export function MembersCard({ balances } : compProps) {
  
  return(
    <>
      <div className="members-card">
        <h1>Members</h1>
        <ul>
          {balances.map(b => 
            <li key={b.name}>
              <p>{b.name}</p>
              <p>{b.balance < 0 ? "Is owed" : "Owes"} {eurFormatter.format(Math.abs(b.balance / 100))}</p>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}