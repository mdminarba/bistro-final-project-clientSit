
const MenuItems = ({item}) => {
    const {name,image,category,price,recipe}=item
    return (
        <div>
             <div className="flex items-center  gap-5" >
              <img className="w-28 h-28" src={image} alt="" style={{borderRadius: '0px 200px 200px 200px'}} />
                    <div className="">
                        <div className="flex gap-36">
                            <h2 className="text-xl text-[#151515]">{name} --------------- </h2>
                        <p className=" text-yellow-500">{price} </p>
                        </div>
                            <p className="">{recipe}</p>
                        <p className="">{category}</p>
                    </div>
                </div>
        </div>
    );
};

export default MenuItems;