
import background from '../../../../assets/menu/pizza-bg.jpg';
import PizzaCard from './PizzaCard';
import Cover from '../../Shared/Cover/Cover';
import UseMenu from '../../../../Hooks/UseMenu/UseMenu';
import { Link } from 'react-router-dom';

const Pizza = () => {
    const [menu]= UseMenu()
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    // const [pizza, setpizza] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const pizzaItems = data.filter(item => item.category === 'pizza')
    //             setpizza(pizzaItems)
    //         })
    // }, [])
  return (
       <section >
            <Cover
                heading={'PIZZA'}
                subHeding={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                img={background}
            >
            </Cover>


            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center mt-10 m-auto lg:w-[900px] gap-10">
                {
                    pizzaItems.map(item => < PizzaCard key={item._id} item={item} />)
                }

            </div>
                <div className="flex justify-center my-10    ">
                <Link to="/category"><button className="btn text-black  mb-5 ml-5 border-0 border-b-4  btn-outline ">ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>

        </section>
  
  )
}

export default Pizza
