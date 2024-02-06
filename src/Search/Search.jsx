
import  { useState } from 'react';

const UserSearch = () => {
  const [userw, setUser] = useState([]);
  const [user, setUserId] = useState('');

  const handleSearch = async () => {
    
    try {
      // Make an HTTP request to fetch user data by user ID
      const response = await fetch(`http://localhost:5005/manage/${user}`);
      const data = await response.json();
      console.log( 'jfgjjgjgjh', userw)
      console.log(user)
      // Update the state with the fetched user data
      setUser(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};


return (
    <div>
    <label>

        <input
            className='text-black'
            type="text"
            value={user}
            onChange={(e) => setUserId(e.target.value)}
        />
    </label>
    <button className='ml-10 bg-gray-100 text-black' onClick={handleSearch}> Search</button>

 
        <div>
            <h2>User Data:</h2>
        
         <div className="">
            {}
            <img src={userw.image} alt="" />
            <p className='text-white'>{userw.name}</p>
   
         </div>
        </div>
       
   
</div>
  );
};

export default UserSearch;
