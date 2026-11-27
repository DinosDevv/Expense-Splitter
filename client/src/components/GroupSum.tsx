import './GroupSum.css'
import { eurFormatter } from '@expense-splitter/shared/helpers'
import bg from '../assets/img/paros.jpg'

interface compProps {
  groupName: string
  numOfParticipators: number
  totalExpenses: number
}

export function GroupSum({groupName, numOfParticipators, totalExpenses} : compProps) {


  return(
    <div
      className="group_sum"
      style={{ '--group-sum-bg': `url(${bg})` } as React.CSSProperties}
    >
      <div className="group_sum_header">
        <h1>{groupName}</h1>
        <p>{numOfParticipators} members</p>
      </div>
      <div className="group_sum_footer">
        <div>
          <p className="group_sum_total">{eurFormatter.format(totalExpenses/100)}</p>
          <p>Total group expenses</p>
        </div>
        <button>View details →</button>
      </div>
    </div>
  )
}
