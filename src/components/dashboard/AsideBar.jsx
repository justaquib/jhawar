'use client'
import React, { useEffect } from "react";
import HeroIcon from "../../lib/heroIcon";
import { ArrowLeftOnRectangleIcon, Bars3CenterLeftIcon,  } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavbarStore } from "../../store/Navbar";

export default function AsideBar({open,handleOpen}) {
    const url = usePathname();
    const {data, getData}   = useNavbarStore();
    useEffect(() => {
        getData();
    },[])
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
                                <Link href='/dashboard'>
                                    <span className="text-green-700">Expense </span>Manager
                                </Link>
                              </h1>
                            : ''
                        }
                    </div>
                    <div className={`${open === 0 ? 'p-4' : 'py-4'}`}>
                        {/* <button onClick={getTodos}>Fetch Todos</button>
                        {todos.map((todo,key) => (
                            <h4 key={key}>{todo.title}</h4>
                        ))}
                        {
                            navBar?.map((data) => (
                                <div key={data.id}>{data.name}</div>
                            ))
                        } */}
                        {
                            data.map((nav) => (
                                <ul className="space-y-1" key={nav.id}>
                                    <li>
                                        <Link href={nav.attributes.url} className={`flex items-center ${url === nav.attributes.url ? 'bg-green-200' : ''} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3 mb-2`}>
                                            <HeroIcon icon={nav.attributes.icon} />
                                            {
                                                open === 0 
                                                ? 
                                                <>
                                                    <span>{nav.attributes.name}</span>
                                                </>
                                                :
                                                ''
                                            }
                                        </Link>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                    {/* <div className={`${open === 0 ? 'p-4' : 'py-4'}`}>
                        <ul className="space-y-1">
                        <li>
                                <Link href="/dashboard" className={`flex items-center ${url === '/dashboard' ? 'bg-green-200' : ''} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3`}>
                                    <Squares2X2Icon className="w-8" />
                                    {
                                        open === 0 
                                        ? 
                                        <>
                                            <span>Dashboard</span>
                                        </>
                                        :
                                        ''
                                    }
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/expenses" className={`flex items-center ${url === '/dashboard/expenses' ? 'bg-green-200' : ''} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3`}>
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
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/plans" className={`flex items-center ${url === '/dashboard/plans' ? 'bg-green-200' : ''} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3`}>
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
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/split-bills" className={`flex items-center ${url === '/dashboard/split-bills' ? 'bg-green-200' : ''} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3`}>
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
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/tasks" className={`flex items-center ${url === '/dashboard/task-manager' ? 'bg-green-200' : ''} ${open === 0 ? 'rounded-xl px-4 space-x-2' : 'justify-center'} hover:bg-green-100 font-bold text-base text-green-900 py-3`}>
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
                                </Link>
                            </li>
                        </ul>
                    </div> */}
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