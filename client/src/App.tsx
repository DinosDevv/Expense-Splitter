import '../public/styles/App.css'
import { GroupForm } from './components/GroupForm'
import { BalanceTracker } from './components/BalanceTracker'
import { CreateGroup } from './components/CreateGroup'
import { TestApi } from './components/TestAPI'

function App() {
  return (
    <>
      <TestApi />
      <GroupForm />
      <BalanceTracker />
      <CreateGroup />
    </>
  )
}

export default App
