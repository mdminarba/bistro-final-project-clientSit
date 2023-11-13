
import { Helmet, } from 'react-helmet-async';
import background from '../../../../../src/assets/menu/banner3.jpg';
import background1 from '../../../../../src/assets/menu/dessert-bg.jpeg';
import background2 from '../../../../../src/assets/menu/pizza-bg.jpg';
import background3 from '../../../../../src/assets/menu/salad-bg.jpg';
import background4 from '../../../../../src/assets/menu/soup-bg.jpg';
import UseMenu from '../../../../Hooks/UseMenu/UseMenu';
import MenuCetagory from './MenuCetagory/MenuCetagory';


const Menu = () => {
    const [menu] = UseMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <section >
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            <MenuCetagory
                items={offered}
                heading="OUR MENU"
                img={background}
                subHeding={'Would you like to try a dish?'}

                >
              
            </MenuCetagory>
            <MenuCetagory
                items={desserts}
                heading="Dessert"
                subHeding={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                img={background1}
            ></MenuCetagory>
            <MenuCetagory
                items={pizza}
                heading="PIZZA"
                subHeding={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                img={background2}
            ></MenuCetagory>
            <MenuCetagory
                items={salad}
                heading="SALADS"
                subHeding={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                img={background3}
            ></MenuCetagory>
            <MenuCetagory
                items={soup}
                heading="SOUPS"
                subHeding={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                img={background4}
            ></MenuCetagory>




        </section>
    )
}

export default Menu
