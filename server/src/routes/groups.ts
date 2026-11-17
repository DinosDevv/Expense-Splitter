import { Router } from "express"

export const groupsRouter = Router() 

groupsRouter.get("/", (req, res) => {
  res.send({ groups: "Yes" })
})
groupsRouter.post("/", (req, res) => {
  
  if(req.body) console.log(req.body)
  

})
