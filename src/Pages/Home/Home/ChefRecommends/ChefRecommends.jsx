import Slide4  from '../../../../assets/menu/salad-bg.jpg';

import Slide2  from '../../../../assets/menu/dessert-bg.jpeg';
import Slide1  from '../../../../assets/menu/pizza-bg.jpg';
const ChefRecommends = () => {
  return (
    <div className="lg:flex-row flex md:flex-row justify-center gap-6 flex-col my-10">
    <div className="card-compact w-96 bg-base-100 shadow-xl">
    <figure><img className='h-80' src={Slide4} alt="Shoes" /></figure>
    <div className="card-body text-center">
      <h2 className=" text-2xl font-semibold text-center">Caeser Salad</h2>
      <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
      <div className="card-actions justify-center">
        <button className="btn text-amber-900 btn-outline ">add to cart</button>
      </div>
    </div>
  </div>
    <div className="card-compact w-96 bg-base-100 shadow-xl">
    <figure><img className='h-80' src={Slide2} alt="Shoes" /></figure>
    <div className="card-body text-center">
      <h2 className="text-2xl font-semibold text-center">Caeser Salad</h2>
      <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
      <div className="card-actions justify-center">
        <button className="btn text-amber-600 btn-outline ">add to cart</button>
      </div>
    </div>
  </div>
    <div className="card-compact w-96 bg-base-100 shadow-xl">
    <figure><img className='h-80' src={Slide1} alt="Shoes" /></figure>
    <div className="card-body text-center">
      <h2 className="text-2xl font-semibold text-center">Caeser Salad</h2>
      <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
      <div className="card-actions justify-center">
        <button className="btn text-amber-900 btn-outline ">add to cart</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ChefRecommends
