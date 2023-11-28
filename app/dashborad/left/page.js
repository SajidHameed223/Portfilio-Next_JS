"use client";
import React, { useState } from 'react'
import {
    PiBookOpenTextLight,
    PiGoogleLogoThin,
    PiTwitterLogoLight,
    PiMagicWandThin, PiShapesThin, PihouseLight
} from 'react-icons/pi'
import { SiAdobe } from "react-icons/si";
//import { motion, useAnimation } from "framer-motion";
import { author } from "../../../assets/sajid.jpg";
import Link from 'next/link'
function leftPage() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    return (
        <div className='hidden md:block bg-[#1C1C1C] w-full md:w-80 h-fit sticky top-5'>
            <div className='md:w-80 w-full p-3 border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C]'>
                <div className='flex'>
                    <div className='w-full relative'>
                        <Image
                            className='w-28 h-28 rounded-full object-cover'
                            src={author}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default leftPage;