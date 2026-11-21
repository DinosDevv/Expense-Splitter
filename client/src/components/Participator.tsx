interface ParticipatorProps{
  name: string
  balance: number
}

export function Participator({ name, balance } : ParticipatorProps) {
  return(
    <>
      <h1>{name}</h1>
      <input type="text" placeholder="Add Expense"/>
      <button>+</button>
      <p>{balance > 0 ? "Owes" : "Is Owed"} {Math.abs(balance)}</p>
    </>
  )
}