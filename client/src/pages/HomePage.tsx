import { AddExpense } from "../components/AddExpense"
import { MembersCard } from '../components/MembersCard'
import { RecentExpenses } from "../components/RecentExpenses"
import { GroupSum } from "../components/GroupSum"
import { GroupBalance } from "../components/GroupBalance"

import { useParams } from "react-router"
import { useEffect, useState } from 'react'

import { Group } from "@expense-splitter/shared/types"

import './HomePage.css'


export function HomePage() {
  const { groupName } = useParams()
  
  const [group, setGroup] = useState<Group | null>(null)

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((json) => {
        for(const group of json) {
          if(group.name === groupName) setGroup(group)
        }
      })
  }, [groupName])


  if(!group) return <p>Loading...</p>

  return (
    <div className="container">
      <div className="groupSum">
        <GroupSum group={group}/>
      </div>
      <div className="membersCard">
        <MembersCard group={group}/>
      </div>
      <div className="recentExpenses">
        <RecentExpenses />
      </div>
      <div className="groupBalance">
        <GroupBalance group={group}/>
      </div>
      <div className="addExpense">
        <AddExpense group={group}/>
      </div>
    </div>
  )
}