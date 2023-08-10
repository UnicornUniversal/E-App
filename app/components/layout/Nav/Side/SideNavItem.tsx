'use client'

import { NavigationLinks } from "@/types/interfaces";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/app/context/AppContext";
import Link from "next/link";
import { Button } from "@/app/components";
import { FaAngleDown } from "react-icons/fa";

const NavLink: React.FC<NavigationLinks> = (props) => {

  const { href = "/", name = "Link", icon: Icon, notification = 0, hasNotification, toggle, type, dropDownAction } = props

  const { sideToggle } = useAppContext()
  const pathname = usePathname()
  const active = href === pathname

  return <>

      <div className=" w-full min-h-[20px] font-thin">

         { hasNotification && !sideToggle && notification > 0 && <span className="indicator-item badge badge-secondary">{notification}</span> }

            <Link className={` min-h-[50px]  h-[53px] w-full flex items-center rounded-lg
           hover:bg-black hover:text-white  px-4 ${active ? 'bg-black text-white' : 'text-gray-400'}`} href={href}>

          <div className="flex gap-4 items-center ">

                <Icon/>
             
              {sideToggle &&  <p className="hidden sm:block">{name}</p>}  

              </div>

              {sideToggle &&   <div className="hidden sm:block">
               
                {hasNotification && notification > 0 && <span className="badge">{notification}</span> }

              </div>}

              {
                type === 'menu' && <Button text="" icon={FaAngleDown} clickEvent={dropDownAction}/>
              }
            
            </Link>

          </div>
          { toggle && type === 'menu' ? <nav className="menu bg-gray-2 p-4 rounded-md">
              <section className="menu-section">
                {/* <span className="menu-title">Finance menu</span> */}
                <ul className="menu-items">
                  <Link href={'/dashboard/finance/purchases'}>
                  <li className="menu-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-content3">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z"></path>
                    </svg>
                    <span>Purchases</span>
                  </li>
                  </Link>
                  <Link href={`/dashboard/finance/sales`}>
                  <li className="menu-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-content3">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"></path>
                    </svg>
                    <span>Sales</span>
                  </li>
                  </Link>
                  <Link href={`/dashboard/finance/expenses`}>
                  <li className="menu-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-content3">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"></path>
                    </svg>
                    <span>Expenses</span>
                  </li>
                  </Link>
                </ul>
              </section>
            </nav> : <div> </div>}
  
        </>
  
};


export default NavLink;
