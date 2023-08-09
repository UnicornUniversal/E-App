'use client'

import { ToastProps } from "@/types/interfaces";
import React from "react";
import { motion } from "framer-motion";
import { IoClose } from 'react-icons/io5'
import ToastButton from "./toastButton";


const Toast: React.FC<ToastProps> = ({ modifier, children, text, icon: Icon, clickEvent, mode = false}) => {


  return <>
        
                <motion.div 
                className="grid place-items-center gap-4"
                 >

                  <div
                  className={` ${modifier} toastCustom `}
                  >

                  <div className="flex gap-4 items-center">
                  <Icon/>
                  {text}
                  </div>

                   { mode && <ToastButton clickEvent={clickEvent} icon={IoClose}/> }
                
                  </div>
                  
                  {children}
                </motion.div>
       
         </>
};

export default Toast;