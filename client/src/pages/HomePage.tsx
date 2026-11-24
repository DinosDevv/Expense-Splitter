import { AddExpense } from "../components/AddExpense"
import { MembersCard } from '../components/MembersCard'
import { RecentExpenses } from "../components/RecentExpenses"
import { GroupSum } from "../components/GroupSum"
import { GroupBalance } from "../components/GroupBalance"

import { useParams } from "react-router"
import { useCallback, useEffect, useState } from 'react'

import { Group } from "@expense-splitter/shared/types"

import './HomePage.css'


export function HomePage() {
  const { groupName } = useParams()
  
  const [group, setGroup] = useState<Group | null>(null)

  // GroupSum 
  const [totalExpenses, setTotalExpenses] = useState(0)

  // Members

  const [balances, setBalances] = useState<{name: string, balance: number}[]>([])

  const loadGroup = useCallback(() => {
    fetch(`/api/groups/group/${groupName}`)
      .then((res) => res.json())
      .then((json) => {
        setGroup(json)
            
        let total = 0
  
        for(const expense of json.expenses) {
          total += expense.amount
        }
        setTotalExpenses(total)
        
      })
  }, [groupName])

  const loadBalances = useCallback(() => {
    fetch(`/api/groups/balances/${groupName}`)
      .then((res) => res.json())
      .then((json) => {
        setBalances(json)
      })
  }, [])

  const handleExpenseAdded = useCallback(() => {
    loadGroup()
    loadBalances()
  }, [loadGroup, loadBalances])


  useEffect(() => { loadGroup() }, [loadGroup])
  useEffect(() => { loadBalances() }, [loadBalances])


  if(!group) return <p>Loading...</p>

  return (
    <div className="container">
      <div className="groupSum">
        <GroupSum groupName={group.name} numOfParticipators={group.participators.length} totalExpenses={totalExpenses}/>
      </div>
      <div className="membersCard">
        <MembersCard balances={balances}/>
      </div>
      <div className="recentExpenses">
        <RecentExpenses expenses={group.expenses}/>
      </div>
      <div className="groupBalance">
        <GroupBalance group={group}/>
      </div>
      <div className="addExpense">
        <AddExpense group={group} onAdded={handleExpenseAdded}/>
      </div>
    </div>
  )
}