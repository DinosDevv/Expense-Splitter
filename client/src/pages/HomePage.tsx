import { AddExpense } from "../components/AddExpense"
import { MembersCard } from '../components/MembersCard'

import { useParams } from "react-router"
import { useEffect, useState } from 'react'

import { Group } from "@expense-splitter/shared/types"

import './HomePage.css'


export function HomePage() {
  const { groupName } = useParams()
  
  let testGroup = {
    "name": "asd",
    "participators": [
      {
        "name": "asd",
        "balance": -5567
      },
      {
        "name": "asde",
        "balance": 1133
      },
      {
        "name": "asdef",
        "balance": 4433
      }
    ]
  }
  const [group, setGroup] = useState<Group>(testGroup)

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((json) => {
        for(const group of json) {
          if(group.name === groupName) setGroup(group)
        }
      })
  }, [])



  return (
    <div className="container">
      <MembersCard group={group}/>
      <AddExpense group={group}/>
    </div>
  )
}