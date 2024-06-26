import { Toggle } from '@/app/components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { type } from 'os';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface Avatar{
    image?: any
    src?: any
    children?: IProps
    modifier?: string
    userId?: string
    width?: string
    height?: string
  }

type FunctionHandler = () => void;

type ToggleHandler = boolean | FunctionHandler

type ClickEvent =  MouseEventHandler<HTMLButtonElement> | string | (() => void)
 
export interface Toggle {

  toggle: boolean
  toggleHandle: FunctionHandler

}

export interface CSSClasses {
  [key: string]: CSSProperties
}

export type InputProps = {
  type: string
  name?: string 
  value: string | undefined | number
  id?: string
  onChange?: FormEventHandler
  onFocus?: FormEventHandler
  placeholder: string 
  textColor?: string
  modifier?: string
  ref?: string
  disabled?: boolean
  hidden?: boolean
  icon: IconType
  iconModifier?: string
  onClick?: ClickEvent
  orientation?: string
  onIcon?: boolean 
}

export type TextAreaProps = {
  type: string
  name: string 
  value: string | undefined | number
  id?: string
  rows?: number
  cols?: number
  onChange?: FormEventHandler
  onFocus?: FormEventHandler
  placeholder: string 
  textColor?: string
  modifier?: string
  ref?: string
  disabled?: boolean
  hidden?: boolean
  iconModifier?: string
  onClick?: ClickEvent
  orientation?: string
}


export interface ToastProps {
  modifier?: string
  children?: JSX.Element
  text?: string
  icon?: IconDefinition
  clickEvent?: ClickEvent
  mode?: boolean
  
}


export type FormAuthData = {

  userName: string,
  name: string
  email: string,
  password: string,
  rememberMe: boolean
  
}

export type PostData = {
  body: string,
  image: string
}

export type EditData = {

  userName: string | undefined
  name: string | null | undefined
  bio: string | undefined 
  coverImage: string | undefined
  profileImage: string | undefined

}


export type ButtonProps = {

  text?: string 
  textColor?: string 
  bgColor?: string
  clickEvent?:  ClickEvent
  borderColor?: string 
  icon?: IconDefinition
  borderSize?: string 
  paddingX?: string
  paddingY?: string
  children?: JSX.Element
  modifier?: string
  tip?: string
  isActive?: boolean
  disabled?: boolean

}
 export interface Side {
    sideToggle: any
    handleSideToggle: any
}
  
export interface ContextData {

  width: number
  user?: IUser
  users?: IUser
  posts?: Post
  post?: Post
  height: number
  toggle?: ToggleHandler
  showPassword?: ToggleHandler
  handleToggle?: ClickEvent
  handleAdSectionToggle?: ClickEvent
  handlePassword?: ClickEvent
  adSectionToggle?: ClickEvent
  userId?: IUser.id
  editProfileToggle?: ToggleHandler
  handleEditProfileToggle?: ClickEvent
  addPostToggle?: ToggleHandler
  handleAddPostToggle?: ClickEvent
  darkMode?: ToggleHandler
  toggleDarkMode?: ClickEvent

}

  export interface NavigationLinks {
    id?: number
    name: string
    href?: string
    link?: string
    icon: IconType
    type
    toggle?: boolean
    notification?: number
    isAuthenticated?: boolean
    hasNotification?: boolean
    dropDownAction?: () => void
  }

  export interface DiscoveryLinks {

    id: number
    name: string
    icon: IconDefinition

  }

  export interface IProps {

    children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
      
  }
 
 
  
  export interface IUser {
    id?: string;
    name?: string 
    email?: string 
    emailVerified?: Date 
    image?: string 
    sector?: string
    role?: string
    options?: string[]
    password?: string 
    contact?: string 
    createdAt?: Date;
    updatedAt?: Date;
    errors?: Record<string, string | null>; 
  }

  type UserProfile = {

    currentProfileUser?: IUser
    currentUser?: IUser
    userId?: string
  
  }

  import { CSSProperties } from 'react'
export interface ShippingOptions {
  description: string
  price: string
}
export interface ProductLine {
  id: number | string
  description: string
  quantity: string
  price: string
  taxRate: any
  discount: string
  amount: string
}

export interface Invoice {
  [x: string]: any;
  slice(arg0: number, index: number): unknown;
  logo: string
  logoWidth: number
  title: string
  companyName: string
  name: string
  companyAddress: string
  companyAddress2: string
  companyCountry: string
  
  billTo: string
  clientName: string
  clientAddress: string
  clientAddress2: string
  clientCountry: string

  invoiceTitleLabel: string
  invoiceTitle: string
  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string

  productLineDescription: string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string
  productLines: ProductLine[] 
  shippingOptions:  ShippingOptions[] 
  subTotalLabel: string
  taxLabel: string

  totalLabel: string
  currency: string

  notesLabel: string
  notes: string
  termLabel: string
  term: string
}
