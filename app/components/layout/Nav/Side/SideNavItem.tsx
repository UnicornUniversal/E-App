'use client'

import { NavigationLinks } from "@/types/interfaces";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/app/context/AppContext";
import Link from "next/link";




const NavLink: React.FC<NavigationLinks> = (props) => {

  const { href = "/", name = "Link", icon: Icon, notification = 0, hasNotification} = props

  const { sideToggle } = useAppContext()
  const pathname = usePathname()
  const active = href === pathname
  


  return <>

      <div className=" w-full min-h-[20px]">

         { hasNotification && !sideToggle && notification > 0 && <span className="indicator-item badge badge-secondary">{notification}</span> }

            <Link className={` min-h-[50px]  h-[53px] w-full flex items-center rounded-2xl
           hover:bg-blue-500 hover:text-white  px-4 ${active ? 'bg-blue-500 text-white' : 'text-black'}`} href={href}>

          <div className="flex gap-4 items-center ">

                <Icon/>
             
              {sideToggle &&  <p className="hidden sm:block">{name}</p>}

              </div>

              {sideToggle &&   <div className="hidden sm:block">
               
                {hasNotification && notification > 0 && <span className="badge">{notification}</span> }

              </div>}
            
            </Link>

          </div>

  
        </>
  
};


export default NavLink;
