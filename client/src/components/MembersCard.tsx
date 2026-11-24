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
              <div className="member_name">
                <div className="member_icon">
                  <p>{b.name[0]}</p>
                </div>
                <p className="name_paragraph">{b.name}</p>
              </div>
              <p className="member_balance">{b.balance < 0 ? "Is owed" : b.balance > 0 ? "Owes" : ""} {eurFormatter.format(Math.abs(b.balance / 100))}</p>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}