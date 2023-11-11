
import { useEffect, useState } from 'react'
import SectionsTitle from '../../Shared/SectionsTitle/SectionsTitle'
import MenuItems from '../../Shared/MenuItems/MenuItems'

const FormOurManu = () => {
    const [menu, setmenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setmenu(popularItems)
            })
    }, [])
    return (
        <section className='mt-10'>
            <SectionsTitle heading={'FROM OUR MENU'}
                subHeding={"Check it out"} />

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center mt-10 gap-5">
                {
                    menu.map(item => <MenuItems key={item._id} item={item} />)
                }
            </div>

            <div className="m-auto my-10  w-48  ">
            <button className="btn text-black  mb-5 ml-5 border-0 border-b-4  btn-outline ">View Full  Menu</button>
            </div>

            <div className=" bg-black text-center py-28 text-3xl text-white">
                <div className="">Call Us: +88 0192345678910</div>
            </div>
        </section>
    )
}

export default FormOurManu
