import { useState, useEffect } from "react"

export function TestApi() {
  const [items, setItems] = useState("")

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((json) => {
        setItems(JSON.stringify(json))
      })
  }, [])
  return (
    <>
      {items}
    </>
  )
}