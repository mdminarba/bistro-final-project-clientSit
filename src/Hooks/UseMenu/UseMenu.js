import { useEffect, useState } from "react"

const UseMenu = () => {
  const [Menu, setMenu] = useState([])
  const [loging, setloging] = useState(true)
  useEffect(() => {
    fetch('http://localhost:5002/menu')
      .then(res => res.json())
      .then(data => {
        setMenu(data)
        setloging(false)
      })
  }, [])
  return [Menu,loging]
}

export default UseMenu
