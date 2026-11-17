import { Router } from "express"
import { createGroup, getGroups } from '../services/groups.js'

export const groupsRouter = Router() 

groupsRouter.get("/", (req, res) => {
  res.send(getGroups())
})
groupsRouter.post("/", (req, res) => {
  
  if(req.body) console.log(req.body)
  createGroup(req.body)

  res.status(201).json(req.body);
})
