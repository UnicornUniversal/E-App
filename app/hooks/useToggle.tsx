"use client";

import { MouseEventHandler, useState } from "react";


const useToggle = ( initialValue:boolean = false ) => {

  const [ toggle, setToggle ] = useState(initialValue)

  const handleToggle: any =  () => {

      setToggle(prev => !prev)

  }

  return [ toggle, handleToggle, setToggle ]

}

export default useToggle;