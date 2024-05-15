"use client"

import { IUser } from "@/types/interfaces";
import { User } from "@prisma/client";
import React, { useState } from "react";
import { useToggle } from ".";
import { toast } from "react-hot-toast/headless";
import { Toast } from "../components";
import { FaAt, FaEllipsisH, FaHandSparkles } from "react-icons/fa";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import axios from "axios";


const useAuthForm = () => {

  const initialAuthData: IUser = {
    name: '',
    email: '',
    image: '',
    password: '',
    contact: '',
    errors: {}
  }
  
  const [ authData, setAuthData ] = useState<IUser>(initialAuthData)
  const [ isSignup, switchSignup, setSignup] = useToggle(false)
  const [ showPassword, handleShowPassword ] = useToggle(false)
  const [ errorValue, handleErrorValue, setErrorValue ] = useToggle(false)
  const router = useRouter()

  const handleAuthChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const { value, type, name, checked} = e.target
    const newValue = type === "checkbox" ? checked : value;
    setAuthData((prevData) => ({
    ...prevData,
    [name]: newValue,
    }))
  }

  const handleValidation = () => {
    const errors: Record<string, string | null> = {};

  if (!authData.email) {
    errors.email = 'Email is required.';
    toast.custom((t: any) => (<Toast
                              modifier={`${t.visible ? 'animate-enter' : 'animate-leave'} bg-orange-500`}
                              icon={FaAt}
                              text="Email is required."
                              />))
  } else if (!/\S+@\S+\.\S+/.test(authData.email)) {
    errors.email = 'Email is invalid.';
  } else {
    errors.email = null; 
  }

  if (!authData.password) {
    errors.password = 'Password is required.';
    toast.custom((t: any) => (<Toast
      modifier={`${t.visible ? 'animate-enter' : 'animate-leave'} bg-orange-500`}
      icon={FaEllipsisH}
      text="Password is required."
      />))
  } else {
    errors.password = null; 
  }

  setAuthData((prevState) => ({
    ...prevState,
    errors,
  }));

  return Object.keys(errors).length === 0;

      }

      const sendAuthData = () => {
        console.log(authData);
        
        handleValidation()
        setAuthData(initialAuthData)
        
        if ( isSignup ) {

          axios.post('/api/signup', authData)
          .catch( error => console.log(error))
          toast.custom(() => (<Toast
                              text="Welcome"
                              modifier="bg-blue-600"
                              icon={FaHandSparkles}
          />))
           
        } else {

          signIn('credentials', { 
            ...authData, 
            redirect: true,
          })

          toast.custom(() => (<Toast
            text="Welcome"
            modifier="bg-blue-600"
            icon={FaHandSparkles}

          />))
         
          
        }
        
        router.refresh()

    }
  return {  
            sendAuthData, handleAuthChange, switchSignup, setSignup,
            errorValue, handleErrorValue, setErrorValue, showPassword, 
            handleShowPassword, isSignup, authData
          }
};

export default useAuthForm;
