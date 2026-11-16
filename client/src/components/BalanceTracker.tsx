export function BalanceTracker() {
  /*
    Participator 1 pays 60$ for a meal, (3 participators in total), so he's owed 40$. His balance is -40$ and the balance of the two other participators is set to +20$ each, meaning that they have more than they should. If a participator's balance is > 0 he owes money, otherwise, he's owed. A participator with a positive balance can then select an expense item (e.g. Dinner) and pay his debt. In that case, his balance (assuming all other debts are taken care of), is set to 0$ (meaning doesn't owe/isn't owed). The goal is for everyone to have a balance of 0$. 

  */
  return(
    <>
      <h1>Guy 1 owes 50$ (or is owed, using ternary operator)</h1>
    </>
  )
}