'use client'
import { useEffect, useState } from 'react';
import AsideBar from '../../components/dashboard/AsideBar';
import Header from '../../components/dashboard/NavBar';


export default function DashboardLayout({children}) {
    const [open, setOpen] = useState(0);
    const [active, setActive] = useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
 
  return (
    <>
        <Header open={open} />
        <AsideBar open={open} handleOpen={handleOpen} active={active} setActive={setActive} />
        <main className={` ${ open === 0 ? 'ml-72' : 'ml-16'} pt-20 bg-green-50 max-h-screen min-h-screen overflow-auto`}>
            {children}
        </main>
        
    </>
  );
}
