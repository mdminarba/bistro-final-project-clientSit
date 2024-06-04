
import { useState } from 'react';
import m1 from "../../../public/pdf/1.png";
import m2 from "../../../public/pdf/2.png";
import m from "../../../public/pdf/3.png";
import m3 from "../../../public/pdf/4.png";
import m4 from "../../../public/pdf/5.png";
import m5 from "../../../public/pdf/6.png";
import m6 from "../../../public/pdf/7.png";
import m7 from "../../../public/pdf/8.png";
import m8 from "../../../public/pdf/9.png";
import m9 from "../../../public/pdf/10.png";
import m10 from "../../../public/pdf/11.png";
import m11 from "../../../public/pdf/12.png";



import useAxiosSecure from '../../Hooks/useAxiosSecure';
const Menu = () => {
  const [menuItemNumber, setMenuItemNumber] = useState('');
  const [menuResult, setMenuResult] = useState(null);
  const axiosSecure = useAxiosSecure();

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosSecure.get(`/menu/${menuItemNumber}`);
      console.log(response)
      setMenuResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      setMenuResult({ error: 'An unexpected error occurred.' });
    }
    console.log(menuItemNumber)
  };

  return (
    <div className='lg:mt-0 mt-3'>

      <form className='lg:text-right w-80 right-10 text-left ml-1 -md:ml-20 mb-5 lg:-mt-14 -mt-[62px]' onSubmit={handleSearch}>
        <input
          type="text"
          className='  text-black font-semibold border-none  bg-slate-200 px-1 py-2  rounded-l-md'
          id="menuItemNumber"
          value={menuItemNumber}
          onChange={(e) => setMenuItemNumber(e.target.value)}
          placeholder=' Enter Passport Number'
          required
        />

        <button className='bg-gray-500 text-black font-extrabold   px-1 rounded-r-md py-2 mr-4' type="submit">Search</button>
      </form>

      {menuResult && (
        <div className='bg-zinc-50'>
          {menuResult.error ? (
            <p>Error: {menuResult.error}</p>
          ) : (
            <div>
              {menuResult.map(item => (
                <div key={item._id}>
                  <h2 className='text-center text-black font-semibold py-2'>{item.name}</h2>
                  <p className='text-center text-black font-extrabold py-2'> Passport Number: {item.number}</p>
                  <a href={item.pdf}>
                    <img className='md:w-[7000px] w-96' src={item.image} alt="" />
                  </a>
                </div>
              ))}
              {/* <div className=" ">
                <div className="">
                  <h2 className=" text-black text-center font-extrabold text-2xl">
                    Application for a <br />
                    Temporary Work (Long Stay Activity) visa
                  </h2>
                  <div className="flex">
                    <div className="">
                    </div>
                    <div className="">
                    </div>
                  </div>
                  <img src={m1} alt="" className='lg:w-screen' />
                </div>
                <div className="">

                  <img src={m1} alt="" className='lg:w-screen' />
                </div>
                <div className="">
                  <img src={m1} alt="" className='lg:w-screen' />
                </div>
                <div className="">
                  <img src={m1} alt="" className='lg:w-screen' />
                </div>
                <div className="">
                  <img src={m1} alt="" className='lg:w-screen' />
                </div>
                <div className="">
                  <img src={m1} alt="" className='lg:w-screen' />
                </div>
                <div className="">
                  <img src={m1} alt="" className='lg:w-screen' />
                </div>
                <div className="">
                  <img src={m1} alt="" className='lg:w-screen' />
                </div>
              </div> */}
            </div>
          )}
        </div>
      )}


    </div>
  );
};

export default Menu;
