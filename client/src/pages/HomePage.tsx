import { GroupForm } from "../components/GroupForm"
import { CreateGroup } from '../components/CreateGroup'
import { SideNav } from '../components/SideNav'
import { AddExpense } from "../components/AddExpense"

import './HomePage.css'

export function HomePage() {

  return (
    <div className="container">
      <SideNav />
      <div>
        <GroupForm />
        <CreateGroup />
        <AddExpense />
      </div>
    </div>
  )
}