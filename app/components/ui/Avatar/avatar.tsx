'use client'

import React from "react";
import { Avatar } from "@/types/interfaces";
import Link from "next/link";
import Image from "next/image";

const Avatar:  React.FC<Avatar> = ({children, src = '/vercel.svg', userId, width = 'w-10'}) => {

  return <div className={`avatar ${width}`}>
        <div className={`w-full mask mask-squircle`}>
          <Link href={`/home/profile/${userId}`}>
           <Image width={10} height={10} className="bg-white w-14 h-14 rounded-full" src={src} alt="thumbnail"/>
          </Link>
        </div>
        </div>
};

export default Avatar;