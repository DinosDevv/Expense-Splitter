import { Router } from "express"
import { createGroup } from '../services/groups.js'

export const groupsRouter = Router() 

groupsRouter.get("/", (req, res) => {
  res.send({ groups: "Yes" })
})
groupsRouter.post("/", (req, res) => {
  
  if(req.body) console.log(req.body)
  createGroup(req.body)

  res.status(201).json(req.body);
})
