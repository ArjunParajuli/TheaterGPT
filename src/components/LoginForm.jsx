import React, { useState, useRef } from "react";
import {
  validateEmailAndPwSignIn, validateEmailAndPwSignUp
} from "../utils/validation";
import { VscError } from "react-icons/vsc";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const LoginForm = ({ isSignIn, setIsSignIn }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const pw = useRef(null);
  const confirmPw = useRef(null);
  const name = useRef(null);


  const toggleSignIn = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsSignIn(!isSignIn);
  };


  const submitHandler = () => {

    // call function to validate the form data
    if(isSignIn){
      const message = validateEmailAndPwSignIn(
        email.current.value, 
        pw.current.value,
      );  
      // console.log("SignIn called")
      setErrorMsg(message);
  
      if(message) return;
    }else{
      const message = validateEmailAndPwSignUp(
        email.current.value, 
        pw.current.value,
        confirmPw?.current?.value
      );  
      // console.log("SignUp called")
      setErrorMsg(message);
  
      if(message) return;
    }
    

    // Sign in & sign up logic
    if(!isSignIn){
      // Sign up logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        pw.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        updateProfile(user, {
          displayName: name?.current?.value, 
        }).then(() => {
          // Profile updated!
          // navigate("/browse");
          const { uid, email, displayName } = auth.currentUser;
          // add to the store
          dispatch(addUser({uid:uid, email:email, displayName:displayName}))
          
        }).catch((error) => {
          setErrorMsg(error.message);
        });
         
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // setErrorMessage(errorCode + "-" + errorMessage);
        setErrorMsg("Email already used");
      });
    }
    else
    {
      // Sign in logic
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        pw.current.value
      )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // navigate("/browse");
        // console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // setErrorMessage(errorCode + "-" + errorMessage);
        setErrorMsg("Invalid User");
      });
    }

  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="absolute inset-0 top-24 mx-auto w-[450px] h-[650px] pt-[50px] px-[68px] pb-[30px] border bg-black bg-opacity-60 rounded-lg"
    >
      <div className="flex flex-col gap-8">
        <div className="text-[32px] font-semibold text-white">
          {" "}
          {isSignIn ? "SIgn In" : "Sign Up"}{" "}
        </div>

        <div className="flex flex-col gap-5">
          {!isSignIn &&
            <input
              ref={name}
              placeholder="Enter full name"
              type="text"
              className="bg-[#333333] opacity-70 w-[314px] h-[50px] rounded-sm pl-[16px] text-white"
            />
          }
          <input
            placeholder="Enter your Email"
            ref={email}
            type="email"
            className="bg-[#333333] opacity-70 w-[314px] h-[50px] rounded-sm pl-[16px] text-white"
          />
          <input
            type="password"
            ref={pw}
            placeholder="Password"
            className="bg-[#333333] opacity-70 w-[314px] h-[50px] pl-[16px] rounded-sm text-white"
          />
          {!isSignIn &&
            <input
              type="password"
              placeholder="Confirm Password"
              ref={confirmPw}
              className="bg-[#333333] opacity-70 w-[314px] h-[50px] pl-[16px] rounded-sm text-white"
            />
          }
        </div>

        { errorMsg &&
          <p className="flex items-center gap-2 text-red-600 font-bold text-lg p-2 border border-red-600 rounded-md bg-red-100 shadow-md">
            {" "}
            <VscError /> {errorMsg}
          </p>
        }
        <button
          className="bg-[#E50914] py-3 rounded-sm text-white"
          onClick={submitHandler}
        >
          {isSignIn ? "Sign In" : "Sign Up"}{" "}
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-3">
        <div className="flex justify-between opacity-60 text-xs text-white">
          <div className="flex gap-1">
            <input type="checkbox" />
            <div>Remember Me</div>
          </div>
          <div className="cursor-pointer">Need Help?</div>
        </div>

        <div className="flex gap-2">
          <div className="opacity-60 text-white">{ isSignIn ? "New to Netflix?" : "Already a user?" }</div>
          <p className="text-white cursor-pointer" onClick={toggleSignIn}>
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </p>
        </div>

        <div className="flex text-white">
          <div className="text-sm">
            <span className="opacity-50">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </span>
            <span className="cursor-pointer text-blue-400"> Learn More</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
