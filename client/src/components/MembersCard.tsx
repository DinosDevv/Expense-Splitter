import './MembersCard.css'
import { eurFormatter } from '@expense-splitter/shared/helpers'
import { memberColor } from '../memberColors'

interface compProps {
  balances: {name: string, balance: number}[]
}

export function MembersCard({ balances } : compProps) {

  return(
    <>
      <div className="members-card">
        <div className="members_header">
          <h1>Members</h1>
          <button type="button" className="members_add" aria-label="Add member">+</button>
        </div>
        <ul>
          {balances.map((b, i) =>
            <li key={b.name} style={{ '--member-color': memberColor(i) } as React.CSSProperties}>
              <div className="member_name">
                <div className="member_icon">
                  <p>{b.name[0]}</p>
                </div>
                <p className="name_paragraph">{b.name}</p>
              </div>
              <p className="member_balance">
                {b.balance !== 0 && (
                  <span className="member_balance_label">{b.balance < 0 ? "is owed" : "owes"}</span>
                )}
                {eurFormatter.format(Math.abs(b.balance / 100))}
              </p>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}
