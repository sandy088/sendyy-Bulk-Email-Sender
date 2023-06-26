import { ArrowLeft } from 'lucide-react'
import React from 'react'

export function ErrorFour() {
  return (
    <div className="py-10 h-screen w-screen bg-[#101728] flex justify-center items-center">
      <div className="text-center">
        <p className="text-base font-semibold text-white">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Comming Soon
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-300">
          Sorry, we couldn&apos:t find the page you&apos;re looking for.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </button>
          <button
            type="button"
            className="rounded-md bg-[#5b4489] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  )
}
