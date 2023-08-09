'use client'

import SideNavItem from "./SideNavItem";
import IconButton from '@mui/material/IconButton';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useToggle, useVariants } from "@/app/hooks";
import { useAppContext } from "@/app/context/AppContext";
import { MdDashboard } from "react-icons/md";
import { BiSolidUserPin } from "react-icons/bi";
import { IconBaseProps } from "react-icons";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const SideNav = () => {

  const { sideToggle, handleSideToggle, setSideToggle } = useAppContext()
  const { sideNavVariant } = useVariants()
  const sideNavController = useAnimationControls()
  
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
          className="p-4 h-screen text-lg font-bold border-r">
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
          <div className="space-y-6">
          <SideNavItem name={`Dashboard`} icon={MdDashboard} href="/dashboard"/>
          <SideNavItem name={`Users`} icon={BiSolidUserPin} href="/dashboard/users"/>
          <SideNavItem name={`Tasks`} icon={MdDashboard} href="/dashboard/settings"/>
          <SideNavItem name={`Settings`} icon={MdDashboard} href="/dashboard/settings"/>
          </div>

        </motion.div>
};

export default SideNav;
