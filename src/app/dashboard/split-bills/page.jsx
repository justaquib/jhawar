'use client'
import React, { useState } from 'react'
import walletIcon from '../../../assets/icons/purse.png'
import Image from 'next/image'

function page() {
  const [wallet,setWallet] = useState(true)
  return (
    <>
      <div>
        <div className="flex flex-col items-end justify-end">
            <div className="flex items-center gap-x-2">
              <button type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                  Create expense category
              </button>
            </div>
            <hr className="my-10"/>
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
                    <h2 className="text-2xl font-bold mb-4">Wallet</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-green-100 rounded-xl text-gray-800">
                            <div className="font-bold text-2xl leading-none">$4500</div>
                            <div className="mt-2">Balance</div>
                        </div>
                        <div className="p-4 bg-red-100 rounded-xl text-gray-800">
                            <div className="font-bold text-2xl leading-none">$500</div>
                            <div className="mt-2">Spend</div>
                        </div>
                        <div className="col-span-2">
                            <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                                <div className="font-bold text-xl leading-none">Your saving plan</div>
                                <div className="mt-2">5 of 8 completed</div>
                            </div>
                        </div>
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