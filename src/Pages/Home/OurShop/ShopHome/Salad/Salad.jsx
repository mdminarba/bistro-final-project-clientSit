

const Salad = ({calad}) => {
    const {name,image,recipe,price}=calad
  return (

<div className="  relative shadow-xl">
    <p className='absolute text-2xl font-extrabold text-black  rounded-md md:left-72 left-72 lg:pt-2  lg:left-64'>$ {price} </p>
  <figure> <img className="" src={image} /></figure>
  <div className="card-body text-center">
    <h2 className="'card-title'">
      <div className="font-bold text-2xl">{name}</div>
    </h2>
    <p >{recipe} </p>
    <div className="card-actions justify-center">
  
    <button className='border-0 border-b-4 bg-gray-100 btn-outline text-yellow-600 btn' >add to cart</button>
    </div>
  </div>
</div>

  )
}

export default Salad
