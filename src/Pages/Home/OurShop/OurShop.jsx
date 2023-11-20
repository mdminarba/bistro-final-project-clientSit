import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import background from '../../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover'

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UseMenu from '../../../Hooks/UseMenu/UseMenu';
import OderTab from './OderTab';
import {  useParams } from 'react-router-dom';


const OurShop = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
const {category} = useParams()
  const initialIndex =   category.indexOf(category);
  
  const [tabIndex, setTabIndex] = useState(initialIndex)
  const [menu] = UseMenu()
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const soup = menu.filter(item => item.category === 'soup')
  const dessert = menu.filter(item => item.category === 'dessert')
  const drinks = menu.filter(item => item.category === 'drinks')
  console.log(initialIndex,category  ,categories)
  return (
    <section className=''>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>

      </Helmet>
      <Cover
        heading={'OUR SHOP'}
        subHeding={'Would you like to try a dish?'}
        img={background}
      >
      </Cover>
      <div className="my-5 ">

        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OderTab items={dessert}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab items={soup}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab items={salad}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab items={pizza}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab items={drinks}></OderTab>
          </TabPanel>
        
         

        </Tabs>

      </div>
    </section>
  )
}

export default OurShop
