import Footer from '../components/Footer';
import Header from '../components/Header';
import  NavBarData  from '../components/providers/navbar/data';
import { fetcher } from '../lib/api';
import Image from 'next/image';
import Global from '../constants/Global';
// import { gql } from "@apollo/client";
// import createApolloClient from "../../apollo-client";
// import { fetcher } from '@/lib/api';
// import Global from '@/constants/global';

export default async function Home() {
  
  // const nav = await fetcher('/api/misc');
  // console.log(await NavBarData())
  return (
    <main>
      <div className="h-screen w-full">
        <Header/>
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <section>
                <div>
                  {/* {NavBarData} */}
                  {/* {
                    nav.data.map((nav,i) => (
                      <div className='text-white' key={i}>
                        {nav.attributes.name}
                      </div>
                    ))
                  } */}
                </div>
                <div className="mb-16 flex flex-wrap">
                  <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-4/12 lg:pr-6">
                    <div
                      className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                      <Image width={480} height={100} className="object-cover max-w-full rounded-lg w-full" src="https://ik.imagekit.io/v24zntfh1/Jhawar/Jhawar1_0IFdo5hCd.jpeg?updatedAt=1693629441165" alt="Siddhant Jhawar" priority={false} />
                      <a href="#!">
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto lg:w-8/12 lg:pl-6">
                    <div className='text-start'>
                      <h1 className="mb-4 text-4xl font-extrabold tracking-tight first-letter:leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hi! Meet <br/>Siddhant Jhawar <br/> Your Financial Advisor</h1>                    
                      <p className="mb-8 text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                        In acknowledgment of the often overwhelming nature of financial management, we extend our unwavering commitment to offer you 
                        the essential guidance you need. Our aim is to alleviate the complexities that can make this task seem daunting. With our expert support, 
                        you can navigate through the intricacies of financial management with greater confidence and ease, ultimately achieving a stronger grasp on 
                        your financial well-being class.
                      </p>
                      <a href='/auth/sign-up' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register with us</a>
                      <a href="#about-me" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:border dark:bg-transparent dark:border-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Know about me</a>
                    </div>
                    
                  </div>
                </div>
              </section>

              <section>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center items-center text-left sm:space-y-0 sm:space-x-4 lg:space-x-12 bg-slate-900 dark:bg-slate-100 rounded-2xl lg:p-24 py-8 px-6">
                  <div className=''>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight first-letter:leading-none text-white md:text-5xl lg:text-6xl dark:text-gray-900">Manage your finance better</h1>
                    <p className="mb-4 text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400">Managing your finances better is an essential skill for achieving your financial goals and securing your financial future.</p>
                    <div className='flex flex-col space-y-4 mb-8'>
                      <div className='flex flex-row space-x-4 text-gray-500 text-sm lg:text-xl dark:text-gray-400'>
                        <p>• Create a Budget</p>
                        <p>• Set Financial Goals</p>
                      </div>
                      <div className='flex flex-row space-x-4 text-gray-500 text-sm lg:text-xl dark:text-gray-400'>
                        <p>• Debt Management</p>
                        <p>• Savings and Investments</p>
                      </div>
                    </div>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 lg:block hidden focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn more</button>
                  </div>
                  <div className="grid grid-cols-2 lg:gap-8 gap-4">
                      <div>
                          <Image width={480} height={100}  className="object-cover max-w-full rounded-lg" src="https://ik.imagekit.io/v24zntfh1/Jhawar/bills-1558396_tUuQbt949G.jpg?updatedAt=1694366930958" alt="" priority={false} />
                      </div>
                      <div>
                          <Image width={480} height={100}  className="object-cover  max-w-full rounded-lg" src="https://ik.imagekit.io/v24zntfh1/Jhawar/monthly%20-bill_Mb2GvkZhs4.jpg?updatedAt=1694366907042" alt="" priority={false} />
                      </div>
                      <div>
                          <Image width={480} height={100}  className="object-cover max-w-full rounded-lg" src="https://ik.imagekit.io/v24zntfh1/Jhawar/shared-expenses_DePx7sHf4y.jpg?updatedAt=1694366879993" alt="" priority={false} />
                      </div>
                      <div>
                          <Image width={480} height={100}  className="object-cover max-w-full rounded-lg" src="https://ik.imagekit.io/v24zntfh1/Jhawar/college-savings_zZgu7D3Xj.jpg?updatedAt=1694366845688" alt="" priority={false} />
                      </div>
                  </div>
                  <div className='d-flex justify-start items-start lg:hidden block'>
                    <button type="button" className="text-white bg-blue-700 w-100 hover:bg-blue-800 focus:ring-4 lg:hidden block my-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn more</button>
                  </div>
                </div>
              </section>

              <section className="bg-white dark:bg-gray-900">
                  <div className="py-8 mx-auto max-w-screen-xl lg:py-16">
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                          <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                              <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                  <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                              </svg>
                              Tutorial
                          </a>
                          <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Seeking Professional Advice</h1>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                            Remember that managing your finances better is an ongoing process that requires discipline and commitment. It's essential to stay informed about financial matters and make informed decisions to achieve your financial goals.
                          </p>
                          <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                              Read more
                              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                          </a>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                              <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
                                  <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                </svg>
                                <span className='ms-1'>Saving</span>
                              </a>
                              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Start to save on your income</h2>
                              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                                Starting with a conscious effort to save a portion of your income is a foundational step towards financial security. 
                                By prioritizing savings and treating it as an essential expense, you can gradually build a financial cushion, work towards your goals, and gain peace of mind. 
                              </p>
                              <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                              </a>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                              <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hourglass-bottom" viewBox="0 0 16 16">
                                  <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
                                </svg>
                                  <span className='ms-1'>Early Saving</span>
                              </a>
                              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Learn about early saving</h2>
                              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                                  Early saving is a financial practice that holds the key to unlocking a brighter and more secure future. It involves the prudent habit of setting aside a portion of your income or allowance during your formative years, whether in adolescence, early adulthood, or even childhood. 
                              </p>
                              <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                  </svg>
                              </a>
                          </div>
                      </div>
                  </div>
                </section>
                
                <section>
                  <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-16">
                      <div className="sm:hidden">
                          <label htmlFor="tabs" className="sr-only">Select tab</label>
                          <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option>Statistics</option>
                              <option>Services</option>
                              <option>FAQ</option>
                          </select>
                      </div>
                      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                          <li className="w-full">
                              <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Statistics</button>
                          </li>
                          {/* <li className="w-full">
                              <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Services</button>
                          </li> */}
                          <li className="w-full">
                              <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">FAQ</button>
                          </li>
                      </ul>
                      <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                                  <div className="flex flex-col items-center justify-center">
                                      <dt className="mb-2 text-3xl font-extrabold">365</dt>
                                      <dd className="text-gray-500 dark:text-gray-400">Days</dd>
                                  </div>
                                  <div className="flex flex-col items-center justify-center">
                                      <dt className="mb-2 text-3xl font-extrabold">100</dt>
                                      <dd className="text-gray-500 dark:text-gray-400">Save Per Day</dd>
                                  </div>
                                  <div className="flex flex-col items-center justify-center">
                                      <dt className="mb-2 text-3xl font-extrabold">36500</dt>
                                      <dd className="text-gray-500 dark:text-gray-400">A Year</dd>
                                  </div>
                                  <div className="flex flex-col items-center justify-center">
                                      <dt className="mb-2 text-3xl font-extrabold">182500</dt>
                                      <dd className="text-gray-500 dark:text-gray-400">5 Years</dd>
                                  </div>
                                  <div className="flex flex-col items-center justify-center">
                                      <dt className="mb-2 text-3xl font-extrabold">365000</dt>
                                      <dd className="text-gray-500 dark:text-gray-400">10 Years</dd>
                                  </div>
                                  <div className="flex flex-col items-center justify-center">
                                      <dt className="mb-2 text-3xl font-extrabold">504728</dt>
                                      <dd className="text-gray-500 dark:text-gray-400">FD for next 5 Year</dd>
                                  </div>
                              </dl>
                          </div>
                          <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
                              {/* <!-- List --> */}
                              <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                                  <li className="flex space-x-2 items-center">
                                      <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                      </svg>
                                      <span className="leading-tight">Dynamic reports and dashboards</span>
                                  </li>
                                  <li className="flex space-x-2 items-center">
                                      <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                      </svg>
                                      <span className="leading-tight">Templates for everyone</span>
                                  </li>
                                  <li className="flex space-x-2 items-center">
                                      <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                      </svg>
                                      <span className="leading-tight">Development workflow</span>
                                  </li>
                                  <li className="flex space-x-2 items-center">
                                      <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                      </svg>
                                      <span className="leading-tight">Limitless business automation</span>
                                  </li>
                              </ul>
                          </div>
                          <div className="hidden p-4 bg-white rounded-lg dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                              <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                                  <h2 id="accordion-flush-heading-1">
                                      <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                                      <span>What is Flowbite?</span>
                                      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                      </svg>
                                      </button>
                                  </h2>
                                  <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                                      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                      <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                      </div>
                                  </div>
                                  <h2 id="accordion-flush-heading-2">
                                      <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                                      <span>Is there a Figma file available?</span>
                                      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                      </svg>
                                      </button>
                                  </h2>
                                  <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                                      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                      </div>
                                  </div>
                                  <h2 id="accordion-flush-heading-3">
                                      <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                                      <span>What are the differences between Flowbite and Tailwind UI?</span>
                                      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                      </svg>
                                      </button>
                                  </h2>
                                  <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                                      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                      <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                      <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                      <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                      <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                          <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                          <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                      </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                </section>
                
                {/* {About Me} */}
                <section id="about-me">
                  <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center text-left sm:space-y-0 sm:space-x-4 lg:space-x-12 bg-slate-900 dark:bg-slate-100 rounded-2xl lg:p-16 px-6 py-8">
                      <div className="flex flex-wrap items-center">
                        <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12 lg:pr-6">
                          <div
                            className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                            <Image src="https://ik.imagekit.io/v24zntfh1/Jhawar/Jhawar2_HZ8UyMf6p.jpeg?updatedAt=1693629441086" width={320} height={100} className='object-cover w-full rounded-lg' priority={false} />
                            <a href="#!">
                              <div
                                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 lg:pl-6">
                          <div className='text-start'>
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight first-letter:leading-none text-white md:text-5xl lg:text-6xl dark:text-gray-900">About Me</h1>
                            <h2 className="mb-4 text-4xl font-extrabold tracking-tight first-letter:leading-none text-white md:text-5xl lg:text-3xl dark:text-gray-900">
                              Mastering Multidisciplinary Excellence
                            </h2>
                            <p className="mb-8 text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                              In my journey, I've evolved into a highly motivated and versatile professional, proficient across various domains. 
                              Armed with a solid academic foundation in accounting, econometrics, mathematical modeling, and statistical analysis, 
                              I navigate complex financial landscapes with precision. However, my capabilities extend beyond academia. Profound communication 
                              skills and effective leadership are qualities that have not only fueled my academic accomplishments but have also been 
                              instrumental in excelling in arenas like Model United Nations and debate, where articulation and negotiation are key. 
                              I extend my passion for knowledge as a tutor and researcher, fervently dedicated to disseminating and expanding understanding. 
                              My diverse skill set underscores my unwavering commitment to continual growth and the relentless pursuit of excellence.
                            </p>
                            <a href="/assets/resume.pdf" download className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download my resume</a>
                          </div>
                        </div>
                      </div>
                    
                    {/* <div className='grid grid-cols-2'>
                      <div className=''>
                          <Image src="https://ik.imagekit.io/v24zntfh1/Jhawar/Jhawar2_HZ8UyMf6p.jpeg?updatedAt=1693629441086" width={320} height={100} className='object-cover max-w-full rounded-lg' />
                          <img className="object-cover max-w-full rounded-lg" src="" alt=""/>
                      </div>
                      <div className=''>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight first-letter:leading-none text-white md:text-5xl lg:text-6xl dark:text-gray-900">About Me</h1>
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight first-letter:leading-none text-white md:text-5xl lg:text-3xl dark:text-gray-900">We invest in the world’s potential</h2>
                        <p className="mb-8 text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400">The Alumni Memorial Scholar designation is the highest honor within the Colgate admission process. Applicants chosen for this
                          distinction possess an exceptional academic record, and have established themselves as leaders in both the classroom and their
                          communities. Scholars receive personalized mentorship from faculty affiliates, funding to support student projects, and a
                          supportive community of scholarship.
                        </p>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download my resume</button>
                      </div>
                    </div> */}
                  </div>
                </section>

                {/** Blog **/}
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 mx-auto max-w-screen-xl lg:py-16">
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                            <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                                <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                                </svg>
                                Blog
                            </a>
                            <h1 className="text-gray-900 dark:text-white text-3xl text-left md:text-5xl font-extrabold mb-2">From the blog</h1>
                            <p className="text-lg font-normal text-gray-500 text-left dark:text-gray-400 mb-6">Learn how to save your money with our expert advice.</p>
                            
                            <div className="mx-auto grid max-w-2xl grid-cols-1 text-left gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                              <article className="flex max-w-xl flex-col items-start justify-between">
                                <div className='pb-4'>
                                  <img className='rounded-lg object-cover' style={{height:"260px"}} src="https://ik.imagekit.io/v24zntfh1/Jhawar/pizza-the-original-share_HUwz_zZFI.jpg?updatedAt=1694367706321" alt="" />
                                </div>
                                <div className="flex items-center gap-x-4 text-xs">
                                  <time dateTime="2020-03-16" className="text-gray-500">Sep 10, 2023</time>
                                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Shared Saving</a>
                                </div>
                                <div className="group relative">
                                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                                    <a href="#">
                                      <span className="absolute inset-0"></span>
                                      Savings and Investments
                                    </a>
                                  </h3>
                                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    Avoid excessive spending and lifestyle inflation. Make conscious choices about your spending and prioritize needs over wants.
                                  </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                  <img src="https://ik.imagekit.io/v24zntfh1/Jhawar/Jhawar2_HZ8UyMf6p.jpeg?updatedAt=1693629441086" alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                                  <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                      <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Siddhant Jhawar
                                      </a>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CEO</p>
                                  </div>
                                </div>
                              </article>

                              <article className="flex max-w-xl flex-col items-start justify-between">
                                <div className='pb-4'>
                                  <img className='rounded-lg object-cover' style={{height:"260px"}} src="https://ik.imagekit.io/v24zntfh1/Jhawar/saving_Mr_euUWoc.png?updatedAt=1694367581350" alt="" />
                                </div>
                                <div className="flex items-center gap-x-4 text-xs">
                                  <time dateTime="2020-03-16" className="text-gray-500">Sep 09, 2023</time>
                                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Saving</a>
                                </div>
                                <div className="group relative">
                                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                                    <a href="#">
                                      <span className="absolute inset-0"></span>
                                      Increase Your Income
                                    </a>
                                  </h3>
                                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    Explore opportunities for increasing your income, such as side hustles or professional development to advance your career.
                                  </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                  <img src="https://ik.imagekit.io/v24zntfh1/Jhawar/Jhawar2_HZ8UyMf6p.jpeg?updatedAt=1693629441086" alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                                  <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                      <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Siddhant Jhawar
                                      </a>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CEO</p>
                                  </div>
                                </div>
                              </article>

                              <article className="flex max-w-xl flex-col items-start justify-between">
                                <div className='pb-4'>
                                  <img className='rounded-lg object-cover' style={{height:"260px"}} src="https://ik.imagekit.io/v24zntfh1/Jhawar/Finance%20Blog%202%20-%20717x360_PGE3YlIPW.jpg?updatedAt=1694367580435" alt="" />
                                </div>
                                <div className="flex items-center gap-x-4 text-xs">
                                  <time dateTime="2020-03-16" className="text-gray-500">Sep 05, 2023</time>
                                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">School Saving</a>
                                </div>
                                <div className="group relative">
                                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                                    <a href="#">
                                      <span className="absolute inset-0"></span>
                                      Regularly Review and Adjust
                                    </a>
                                  </h3>
                                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    Your financial situation can change over time. Periodically review your budget and financial goals, and adjust them as needed.
                                  </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                  <img src="https://ik.imagekit.io/v24zntfh1/Jhawar/Jhawar2_HZ8UyMf6p.jpeg?updatedAt=1693629441086" alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                                  <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                      <a href="#">
                                        <span className="absolute inset-0"></span>
                                        Siddhant Jhawar
                                      </a>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CEO</p>
                                  </div>
                                </div>
                              </article>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <Footer/>
      </div>
      
    </main>
  );
}
