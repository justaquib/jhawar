'use client'
import React, { useState } from 'react'
import walletIcon from '../../../assets/icons/purse.png'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/solid'

const intVal = {
  amount: "",
  split: "",
  category: ""
}

function page() {
  const [wallet,setWallet] = useState(true);
  const [confirm,setConfirm] = useState(false);
  const [splitData, setSplitData] = useState(intVal);
  const [splitAmt,setSplitAmt] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSplitData({... splitData,[name]:value,});
  };
  const handleSplitAmt = () => {
    const amt = splitData.amount / splitData.split;
    setSplitAmt(amt);
    setConfirm(true);
  }
  // console.log(splitData);
  return (
    <>
      <div>
        <div className="flex flex-col items-end justify-end">
            {
              wallet === false 
              ? <div className='w-full text-center flex flex-col justify-center items-center'>
                  <h5 className='text-2xl font-semibold mb-8'>Add money to your wallet</h5>
                  <Image src={walletIcon} width={80} height={80} />
                  <button type="button" className="inline-flex items-center justify-center h-9 my-4 px-8 rounded-xl bg-green-600 text-gray-300 hover:text-white text-sm font-semibold transition">
                      Add
                  </button>
                </div>
              :
              <div className="grid grid-cols-2 gap-x-20 w-full">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Split Bills</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4 col-span-2">
                            <label htmlFor="amout" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount Spent</label>
                            <input type="number" onChange={handleChange} name='amount' id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required/>
                        </div>
                        <div className="mb-4 col-span-2">
                            <label htmlFor="split" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Split Between</label>
                            <input type="number" onChange={handleChange} id="split" name='split' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2" required/>
                        </div>
                        <div className="mb-4 col-span-2">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>
                            <input type="text" onChange={handleChange} id="category" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shopping" required/>
                        </div>
                        {
                          confirm === false
                          ?<div className="mb-4 col-span-2">
                            <button type="button" onClick={handleSplitAmt} className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                Confirm
                            </button>
                          </div>
                          :<div className="col-span-2">
                              <div className="p-4 bg-purple-100 rounded-xl text-gray-800 relative">
                                  <div className='absolute top-1 right-1'>
                                    <button onClick={() => setConfirm(false)} className='w-5 h-5 rounded-full border border-black'><XMarkIcon /></button>
                                  </div>
                                  <div className="font-bold text-xl leading-none">Your split amount</div>
                                  <div className="mt-2">Pay <span className='font-bold'>${splitAmt.toFixed(2)}</span> each</div>
                              </div>
                          </div>
                        }
                    </div>
                </div>
                <div>
                    <div className='flex flex-row justify-between'>
                      <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
                      <button type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                          Add
                      </button>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                            <div className="flex justify-between">
                                <div className="text-gray-400 text-xs">Sun 20<sup>th</sup> Nov 2023</div>
                                <div className="text-gray-400 text-xs">4h</div>
                            </div>
                            <div className="hover:text-green-800">
                              Spent <span className='font-bold'>$500</span> on party
                            </div>
                            <div className='text-sm text-gray-400'>
                              Split between <span className='font-bold text-gray-700'>2</span>
                            </div>
                        </div>
                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                            <div className="flex justify-between">
                                <div className="text-gray-400 text-xs">Sun 10<sup>th</sup> Nov 2023</div>
                                <div className="text-gray-400 text-xs">4h</div>
                            </div>
                            <div className="hover:text-green-800">
                              Spent <span className='font-bold'>$50</span> on grocery
                            </div>
                            <div className='text-sm text-gray-400'>
                              Split between <span className='font-bold text-gray-700'>3</span>
                            </div>
                        </div>
                        <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                            <div className="flex justify-between">
                                <div className="text-gray-400 text-xs">Sun 08<sup>th</sup> Nov 2023</div>
                                <div className="text-gray-400 text-xs">4h</div>
                            </div>
                            <div className="hover:text-green-800">
                              Spent <span className='font-bold'>$100</span> on shopping
                            </div>
                            <div className='text-sm text-gray-400'>
                              Split between <span className='font-bold text-gray-700'>2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
      </div>
    </>
  )
}

export default page