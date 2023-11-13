
import MenuItems from '../MenuItems/MenuItems'
import SectionsTitle from '../Shared/SectionsTitle/SectionsTitle'
import UseMenu from '../../../Hooks/UseMenu/UseMenu'


const PopularManu = () => {
    const [menu] = UseMenu()
    const popularItems = menu.filter(item => item.category === 'popular')
    return (
        <section className='mt-10'>
            <SectionsTitle heading={'FROM OUR MENU'}
                subHeding={"Check it out"} />

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center mt-10 gap-5">
                {
                    popularItems.map(item => <MenuItems key={item._id} item={item} />)
                }
            </div>

            <div className="m-auto my-10  w-48  ">
                <button className="btn text-black  mb-5 ml-5 border-0 border-b-4  btn-outline ">View Full  Menu</button>
            </div>


        </section>
    )
}

export default PopularManu
