import './GroupSum.css'

interface compProps {
  groupName: string
  numOfParticipators: number
  totalExpenses: number
}

export function GroupSum({groupName, numOfParticipators, totalExpenses} : compProps) {


  return(
    <div className="group_sum">
      <div className="left">
        <h1>{groupName}</h1>
        <p>{numOfParticipators} members</p>
        <h1>€{totalExpenses/100}</h1>
        <p>Total Group expenses</p>
      </div>
      <div className="right">
        <button>View Details →</button>
      </div>
    </div>
  )
}