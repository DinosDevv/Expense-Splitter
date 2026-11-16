import { Router } from "express"

export const groupsRouter = Router() 

groupsRouter.get("/", (req, res) => {
  res.send({ groups: "Yes" })
})
