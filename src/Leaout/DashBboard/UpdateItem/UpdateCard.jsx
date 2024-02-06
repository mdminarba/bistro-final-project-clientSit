import { useEffect, useState } from "react"
import UpdateItem from "./UpdateItem"


const UpdateCard = () => {
    const [datas, setdatas] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5005/menu`)
        .then(res=>res.json())
        .then(data=>setdatas(data))
      },[])
  return (
    <div>
         {
        datas.map(card =><UpdateItem key={card.id} card={card} ></UpdateItem>)
        }
    </div>
  )
}

export default UpdateCard
