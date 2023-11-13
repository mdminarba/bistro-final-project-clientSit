import inmage from '../../../../src/assets/home/featured.jpg'
import SectionsTitle from '../Shared/SectionsTitle/SectionsTitle'

import './FettureImage.css'

const Featured = () => {
    return (
        <div className='image1  bg-fixed  '>
            <div className=" bg-slate-500 bg-opacity-60 ml p-5">
                 
        
       
     
            <SectionsTitle
                    heading={'FROM OUR MENU'}
                    subHeding={'Check it out'}
            ></SectionsTitle>
           

          
            <div className=" flex lg:flex-row md:flex-row items-center flex-col gap-10  lg:p-20">
                <div className=" flex-1">
                    <img src={inmage} alt="" />
                </div>
                <div className="flex-1  text-white">
                    <h3 className="text-xl m">March 20, 2023</h3>
                    <h3 className="text-2xl">WHERE CAN I GET SOME?</h3>
                    <p className="lg:w-[450px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div className="  ml-36  w-48 lg:mt-10 ">
                        <div className="card-actions mb-5 justify-center">
                            <button className="btn text-white  border-0 border-b-4 btn-outline ">Read More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Featured
