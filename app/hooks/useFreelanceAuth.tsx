"use client"

import { useState } from "react";
import { useSteps } from "."
import { IUser } from "@/types/interfaces";
import { Fa500Px, FaShoppingCart } from "react-icons/fa";

const useFreelanceAuth = () => {

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const initialAuthData: IUser = {
    name: '',
    email: '',
    image: '',
    password: '',
    contact: '',
    role: 'Freelancer',
    sector: '',
    options: selectedOptions,
    errors: {}
  }

  const { FREELANCE_STEPS } = useSteps()
  const [steps, setSteps ] = useState(FREELANCE_STEPS.SELECT_FEATURES)
  const features = [
  { icon: FaShoppingCart, name: 'Ecommerce'}, 
  { icon: Fa500Px, name: 'Website'},
  { icon: Fa500Px, name: 'File manager'}, 
  { icon: Fa500Px, name: 'Stock'},
  { icon: Fa500Px, name: 'Stock'},
  { icon: Fa500Px, name: 'Stock'},
  { icon: Fa500Px, name: 'Stock'},
  { icon: Fa500Px, name: 'Stock'},
]
  const [ freelanceAuthData, setFreelanceAuthData ] = useState<IUser>(initialAuthData)

  const handleFreelanceAuthChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const { value, type, name, checked} = e.target
    const newValue = type === "checkbox" ? checked : value;
    setFreelanceAuthData((prevData) => ({
    ...prevData,
    [name]: newValue,
    }))
  } 

  const onBack = () => {
    if( steps === FREELANCE_STEPS.SELECT_FEATURES){
      setSteps(0)
    } else {
      setSteps((prevValue) => prevValue - 1);
    }
  }

  const onNext = () => {
    if( steps === FREELANCE_STEPS.DETAILS){
      setSteps(2)
    } else {
    setSteps((prevValue) => prevValue + 1);
  }
  }


  return { features, FREELANCE_STEPS, selectedOptions, setSelectedOptions, steps, setSteps, handleFreelanceAuthChange, onBack, onNext, freelanceAuthData, setFreelanceAuthData }
}

export default useFreelanceAuth