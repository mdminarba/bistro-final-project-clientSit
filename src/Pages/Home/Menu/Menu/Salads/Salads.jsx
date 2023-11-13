import  { useEffect, useState } from 'react'
import Cover from '../../../Shared/Cover/Cover'
import SaladsCard from './SaladsCard'
import background from '../../../../../assets/../assets/menu/salad-bg.jpg';
import { Link } from 'react-router-dom';
const Salads = () => {
    const [pizza, setpizza] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const pizzaItems = data.filter(item => item.category === 'pizza')
                setpizza(pizzaItems)
            })
    }, [])
  return (
    <section >
            <Cover
                heading={'SALADS'}
                subHeding={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}
                img={background}
            >
            </Cover>


            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center mt-10 m-auto lg:w-[900px] gap-10">
                {
                    pizza.map(item => <SaladsCard key={item._id} item={item} />)
                }

            </div>
                <div className="flex justify-center my-10    ">
                <Link to="/category"><button className="btn text-black  mb-5 ml-5 border-0 border-b-4  btn-outline ">ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>

        </section>
  
  )
}

export default Salads
