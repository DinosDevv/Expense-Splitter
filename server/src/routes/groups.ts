import { Router } from "express"
import { createGroup, getGroups, addExpense } from '../services/groups.js'

export const groupsRouter = Router() 

groupsRouter.get("/", (req, res) => {
  res.send(getGroups())
})
groupsRouter.post("/", (req, res) => {
  
  if(req.body) console.log(req.body)
  createGroup(req.body)

  res.status(201).json(req.body);
})
groupsRouter.get("/handleExpense", (req, res) => {
  res.send("OK")
})
groupsRouter.post("/handleExpense", (req, res) => {
  if(req.body) console.log(req.body)
  addExpense(req.body.name, req.body.amount)

  res.status(201).json(req.body);

})
