import { useEffect, useState } from 'react'
import ShopCard from './ShopCard'
const ShopHome = () => {
    const [salad, setsalad] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setsalad(data))
    }, [])
    return (
        <section >


            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center mt-10 m-auto lg:w-[1100px] gap-10">
                {
                    salad.map(item => <ShopCard key={item._id} item={item} />)
                }

            </div>

        </section>

    )
}

export default ShopHome
