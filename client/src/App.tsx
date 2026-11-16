import '../public/styles/App.css'
import { GroupForm } from './components/GroupForm'
import { BalanceTracker } from './components/BalanceTracker'
import { CreateGroup } from './components/CreateGroup'

function App() {
  return (
    <>
      <GroupForm />
      <BalanceTracker />
      <CreateGroup />
    </>
  )
}

export default App
