'use client'
import { useState } from 'react';
import AsideBar from '../../components/dashboard/AsideBar';
import Header from '../../components/dashboard/NavBar';


export default function DashboardLayout({children}) {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
 
  return (
    <>
        <Header open={open} />
        <AsideBar open={open} handleOpen={handleOpen} />
        <main className={` ${ open === 0 ? 'ml-72' : 'ml-16'} pt-20 bg-green-50 max-h-screen min-h-screen overflow-auto`}>
          <div className="px-6 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-5 min-h-[480px]">
                  {children}
                </div>
              </div>
            </div>
        </main>
        
    </>
  );
}
