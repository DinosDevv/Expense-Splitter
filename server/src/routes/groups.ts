import { Router } from "express"
import { createGroup, getGroups, addExpense, calculateBalances, getGroup } from '../services/groups.js'
import { Group } from "@expense-splitter/shared/types.js"

export const groupsRouter = Router() 

groupsRouter.get("/", (req, res) => {
  res.send(getGroups())
})
groupsRouter.post("/", (req, res) => {
  
  if(req.body) console.log(req.body)
  createGroup(req.body)

  res.status(201).json(req.body);
})
groupsRouter.get("/balances/:groupName", (req, res) => {
  const group = getGroup(req.params.groupName)
  if (!group) return res.status(404).json({ error: "Group not found" })
  
  const balances = calculateBalances(group)
  res.json([...balances].map(([name, balance]) => ({ name, balance })))
})

groupsRouter.post("/handleExpense", (req, res) => {
  if(req.body) console.log(req.body)
  addExpense(req.body)

  res.status(201).json(req.body);

})

