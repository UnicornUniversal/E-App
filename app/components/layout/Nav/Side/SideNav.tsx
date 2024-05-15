'use client'

import SideNavItem from "./SideNavItem";
import IconButton from '@mui/material/IconButton';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useLinks, useToggle, useVariants } from "@/app/hooks";
import { useAppContext } from "@/app/context/AppContext";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { NavigationLinks } from "@/types/interfaces";

const SideNav = () => {

  const { sideToggle, handleSideToggle, setSideToggle } = useAppContext()
  const { sideNavVariant } = useVariants()
  const [ linkMenuToggle, handleLinkMenuToggle ] = useToggle(false)
  const sideNavController = useAnimationControls()
  const { links } = useLinks()
  
  const controllSideNav = () => {
    if (sideToggle) {
      sideNavController.start('show')
    } else {
      sideNavController.start('hidden')
    }
  }
  
  useEffect(() => {
    controllSideNav()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideToggle]);

  return <motion.div
          variants={sideNavVariant}
          animate={sideNavController}
          className=" min-h-screen p-8">
          <div className="flex justify-between items-center mb-8">
          {sideToggle ? <h1>
            BE
          </h1> : <h1>BE</h1>}
            <IconButton
             onClick={handleSideToggle}
            >
              {sideToggle ? <FaAngleLeft/> : <FaAngleRight/>}
            </IconButton>
          </div>
          <div className="space-y-2">
            {links.map((link: NavigationLinks) => (
            <SideNavItem 
            key={link.id} 
            name={link.name} 
            icon={link.icon} 
            href={link.link}
            type={link.type}
            toggle={linkMenuToggle}
            dropDownAction={handleLinkMenuToggle}
            />
            ))}
          </div>
        </motion.div>
};

export default SideNav;
