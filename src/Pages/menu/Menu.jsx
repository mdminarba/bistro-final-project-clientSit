
import { useState } from 'react';


import useAxiosSecure from '../../Hooks/useAxiosSecure';
const Menu = () => {
  const [menuItemNumber, setMenuItemNumber] = useState('');
  const [menuResult, setMenuResult] = useState(null);
  const axiosSecure = useAxiosSecure();

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosSecure.get(`/menu/${menuItemNumber}`);
      setMenuResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      setMenuResult({ error: 'An unexpected error occurred.' });
    }
    console.log(menuItemNumber)
  };

  return (
    <div className=''>
      
      <form className='text-right ' onSubmit={handleSearch}>
        <input
          type="text"
          className='  text-black font-semibold border-none  bg-slate-200 px-1 py-1 w-32 rounded-l-md'
          id="menuItemNumber"
          value={menuItemNumber}
          onChange={(e) => setMenuItemNumber(e.target.value)}
          required
        />
        <button className='bg-slate-500   px-1 rounded-r-md py-1 mr-4' type="submit">Search</button>
      </form>

      {menuResult && (
        <div className='bg-zinc-50'>
          {menuResult.error ? (
            <p>Error: {menuResult.error}</p>
          ) : (
            <div className=''>
             
              <h2 className='text-center text-black font-semibold ml-20 py-2 w-full '>{menuResult.name}</h2>
              <p className='text-center text-black font-extrabold ml-20 py-2 w-full '>Number: {menuResult.number}</p>
             
              <a href={menuResult.pdf}>
              <img className=' md:w-[7000px] w-[7000px] ml-20' src={menuResult.image} alt="" />
              </a>
          
   
            </div>
          )}
  
        </div>
      )}

   
    </div>
  );
};

export default Menu;
