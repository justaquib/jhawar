'use client'
import { ArrowLeftOnRectangleIcon, Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { CalendarIcon, ClipboardIcon, ReceiptPercentIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function AsideBar({open,handleOpen,active,setActive}) {
 
  return (
    <>
        <aside className={`fixed inset-y-0 left-0 bg-white shadow-md max-h-screen ${open === 0 ? 'w-72' : 'w-16'}`}>
            <div className="flex flex-col justify-between h-full">
                <div className="flex-grow">
                    <div className="px-4 py-6 text-center border-b flex flex-row space-x-4 items-center">
                        <button className="" onClick={() => handleOpen(1)}>
                            <Bars3CenterLeftIcon className="w-8" />
                        </button>
                        {
                            open === 0
                            ? <h1 className="text-xl font-bold leading-none">
                                <span className="text-green-700">Expense </span>Manager
                              </h1>
                            : ''
                        }
                    </div>
                    <div className={`${open === 0 ? 'p-4' : 'py-4'}`}>
                        <ul className="space-y-1">
                            <li>
                                <a href="javascript:void(0)" onClick={() => setActive(true)} className={`flex items-center ${active && 'bg-green-200'} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3`}>
                                    <CalendarIcon className="w-8" />
                                    {
                                        open === 0 
                                        ? 
                                        <>
                                            <span>Plan</span>
                                        </>
                                        :
                                        ''
                                    }
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onClick={() => setActive(true)} className={`flex items-center ${active && 'bg-green-200'} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3`}>
                                    <ShoppingBagIcon className="w-8" />
                                    {
                                        open === 0 
                                        ? 
                                        <>
                                            <span>Expenses</span>
                                        </>
                                        :
                                        ''
                                    }
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onClick={() => setActive(true)} className={`flex items-center ${active && 'bg-green-200'} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3`}>
                                    <ReceiptPercentIcon className="w-8" />
                                    {
                                        open === 0 
                                        ? 
                                        <>
                                            <span>Split Bills</span>
                                        </>
                                        :
                                        ''
                                    }
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onClick={() => setActive(true)} className={`flex items-center ${active && 'bg-green-200'} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3`}>
                                    <ClipboardIcon className="w-8" />
                                    {
                                        open === 0 
                                        ? 
                                        <>
                                            <span>Task Manager</span>
                                        </>
                                        :
                                        ''
                                    }
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 flex justify-center items-center">
                    <button type="button" className="flex flex-row flex-1 items-center justify-center h-9 px-2 rounded-lg bg-gray-900 text-gray-300 hover:text-white text-base font-semibold transition">
                        <ArrowLeftOnRectangleIcon className="w-6" />
                        {
                            open === 0 ? 'Logout' : ''
                        }
                    </button>
                </div>
            </div>
        </aside>
    </>
  );
}