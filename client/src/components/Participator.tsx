interface ParticipatorProps{
  name: string
  balance: number
}

export function Participator({ name, balance } : ParticipatorProps) {
  return(
    <>
      <p>{name}</p>
      <input type="text" placeholder="Expense Name"/>
      <input type="number" placeholder="Expense Value"/>
      <button>+</button>
      <p>{balance > 0 ? "Owes" : "Is Owed"} {Math.abs(balance)}</p>
    </>
  )
}