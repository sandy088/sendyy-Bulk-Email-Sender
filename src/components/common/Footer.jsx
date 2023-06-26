import React from 'react'
import SendyyLogos from '../../assets/Logos/SendyyLogos.png'

export function FooterFour() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#0a0e19]">
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center text-white">
                <img src={SendyyLogos} alt='sendyy logo' loading='lazy' height={40} width={40}/>
                <span className="ml-4 text-lg font-bold text-white">Sendyy</span>
              </div>
              <div>
                <p className="mb-4  text-base font-medium text-white">Free Bulk E-mail Sender</p>
                <p className="text-sm text-gray-400">
                  &copy; Copyright 2022. All Rights Reserved by Sendyy-free Bulk Email Sender.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-400 hover:text-gray-300" href="#">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
