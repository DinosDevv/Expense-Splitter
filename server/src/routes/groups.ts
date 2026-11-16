import { Router } from "express"

export const groupsRouter = Router() 

groupsRouter.get("/", (req, res) => {
  res.send({ groups: "Yes" })
})
groupsRouter.post("/", (req, res) => {
  const {ok} = req.body
  
  res.status(201).json({ok})
})
