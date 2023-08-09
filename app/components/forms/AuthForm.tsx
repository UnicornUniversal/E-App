'use client'

import { useState } from 'react';
import Box from '@mui/material/Box';
import {FiEye, FiEyeOff } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Btn, Input } from '..';
import useToggle from '@/app/hooks/useToggle';
import { Link } from '@mui/material';
import { useAuthForm } from '@/app/hooks';


export default function AuthForm() {
  
  const [ showPassword, handleShowPassword ] = useToggle(false)
  const {sendAuthData, isSignup, switchSignup, handleAuthChange, authData} = useAuthForm()
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  console.log(authData);
  

  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='flex flex-col space-y-2'>
       
      {isSignup &&  <Input
        icon={ AiOutlineUser }
        type={`text`}
        disableRipple
        label='Name'
        name='name'
        value={authData.name}
        onChange={handleAuthChange}
        />}

        <Input
        icon={ MdOutlineAlternateEmail }
        type={`email`}
        disableRipple
        label='Email'
        name='email'
        value={authData.email}
        onChange={ handleAuthChange}
        />
      
        <Input
        toggle={showPassword}
        handleClickShow={handleShowPassword}
        icon={ showPassword ? FiEyeOff : FiEye }
        type={showPassword ? 'text' : 'password'}
        value={authData.password}
        onChange={handleAuthChange}
        name='password'
        label='Password'
        />

        <Btn
        icon={FaArrowAltCircleRight}
        label='Sign up'
        onClick={sendAuthData}
        />
        <Btn
        icon={FaArrowAltCircleRight}
        label='Switch'
        onClick={switchSignup}
        />

        <Link className='w-full' href='/dashboard'>
        <Btn
        icon={FaArrowAltCircleRight}
        label='Dashboard'
        modifier='w-full'
        />
        </Link>
      </div>
    </div>
  );
}