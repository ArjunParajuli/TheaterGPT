import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth'; 
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../redux/userSlice';
import { useDispatch} from 'react-redux'; 
import { FaRobot } from "react-icons/fa";
import { toggleAISearchSelected } from '../redux/aiSlice';

const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

// header is present all across our app, so whenever header loads, onAuthStateChanged will be trigerred and auth will be updated and 
// it'll automatically redirect us to the proper route

 // runs whenever Header component is loaded
 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    // runs whenever a user signs in or signs out
    if(user) { // if user is not null or undefined, it means a user is signed in.
      const { uid, email, displayName } = user;
      dispatch(addUser( {uid:uid, email:email, displayName:displayName} )) // updating store with user data
      navigate('/browse');
    }else{
      // User has signed out
      dispatch(removeUser());
      navigate('/');
    }
  });

 }, [])

const user = useSelector(state=>state.user)

const clickHandler = () =>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/')
}).catch((error) => {
  // An error happened.
});
  
}


  return (
    <div className="px-14 absolute w-full pt-8" >

      <div className='flex justify-between'>
      <div className='flex flex-col hidden md:block'>
      <img src="/logo.png" className={`shadow-lg ring-2 ring-gray-300 ring-offset-2 ring-offset-gray-100 ring-opacity-50`} alt='logo'></img>
      </div> 

      {user && (
      <div className='flex h-[32px] gap-2 sm:gap-3 z-20 items-center'>
        <div className='text-white hidden md:block'>Not sure what to watch? Try AI recommendation</div>
      <button className="bg-green-500 hover:bg-green-700 text-white md:font-semibold p-2 md:px-3 md:py-1 rounded-md shadow-md flex items-center gap-2" 
      onClick={()=>{
        dispatch(toggleAISearchSelected())
      }}>
       <FaRobot className='text-sm sm:text-xl hidden sm:block' /> <span>AI Search</span>
      </button>
      <img src="/profile.png" alt="profile"></img>
      <button className='bg-[#E50914] p-2 rounded-md text-sm md:text-md' onClick={clickHandler}>Sign Out</button>
      </div>
      )}
      
      </div>

    </div>
  )
}

export default Header