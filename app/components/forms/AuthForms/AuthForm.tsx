'use client'

import { useState } from 'react';
import Box from '@mui/material/Box';
import {FiEye, FiEyeOff } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Button, Input, Modal } from '../..';
import useToggle from '@/app/hooks/useToggle';
import { Link } from '@mui/material';
import { useAuthForm } from '@/app/hooks';
import FreelancerSignup from './FreelancerSignup';


export default function AuthForm() {
  
  const [ showPassword, handleShowPassword ] = useToggle(false)
  const [ asAgent, handleAsAgent, setAsAgent ] = useToggle(false)
  const [ asFreelance, handleAsFreelance, setAsFreelance ] = useToggle(false)
  const [ asBusinessIndividual, handleAsBusinessIndividual, setAsBusinessIndividual] = useToggle(false)
  const {sendAuthData, isSignup, switchSignup, handleAuthChange, authData} = useAuthForm()
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  console.log(authData);
  

  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='flex flex-col space-y-2'>
       
      {isSignup &&  <Input
          icon={AiOutlineUser}
          type={`text`}
          name='name'
          value={authData.name}
          onChange={handleAuthChange} 
          placeholder={'Enter Full name'} 
          modifier='input'       
        />}

        <Input
          icon={MdOutlineAlternateEmail}
          type={`email`}
          name='email'
          value={authData.email}
          onChange={handleAuthChange} 
          placeholder={'Enter email'}   
          modifier='input'
          />
      
        <Input
          onClick={handleShowPassword}
          icon={showPassword ? FiEyeOff : FiEye}
          type={showPassword ? 'text' : 'password'}
          value={authData.password}
          onChange={handleAuthChange}
          name='password' 
          modifier='input'
          placeholder={'Enter password'}        
      />

        <Button
        icon={FaArrowAltCircleRight}
        text='Sign up'
        clickEvent={sendAuthData}
        />
        <Button
        icon={FaArrowAltCircleRight}
        text='Switch'
        clickEvent={switchSignup}
        />

        <Link className='w-full' href='/dashboard'>
        <Button
        icon={FaArrowAltCircleRight}
        text='Dashboard'
        modifier='w-full'
        />
        </Link>
        <div className='space-y-2'>
        <Modal
          icon={FaUser}
          toggle={asFreelance}
          onClick={handleAsFreelance}
          label="Sign as an Freelancer"
          modifier="btn"
          modal={asFreelance ? 'asFreelance' : ''}
          checked={asFreelance}
          modalOff={() => setAsFreelance(false)}
        >
          <FreelancerSignup/>
        </Modal>

        <Modal
          icon={FaUser}
          toggle={asAgent}
          onClick={handleAsAgent}
          label="Sign as an Agent"
          modifier="btn"
          modal={asAgent ? 'handleAsAgent' : ''}
          checked={asAgent}
          modalOff={() => setAsAgent(false)}
        >
          <h1>Agent</h1>
        </Modal>

        <Modal
        icon={FaUser}
        toggle={asBusinessIndividual}
        onClick={handleAsBusinessIndividual}
        label="Sign as Business or Individual"
        modifier="btn"
        modal={asBusinessIndividual ? 'AsBusinessIndividual' : ''}
        checked={asBusinessIndividual}
        modalOff={() => setAsBusinessIndividual(false)}

        >
          <h1>Businnees</h1>
        </Modal>
        </div>
      </div>
    </div>
  );
}