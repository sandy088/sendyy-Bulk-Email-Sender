import React from 'react'
import { CheckCircle, X } from 'lucide-react'

export function SuccessBanner() {
  return (
    <>
      <div className="rounded-md border-l-4 border-green-500 bg-green-100 p-4">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-green-600">
              This is some informational text that you can use to show some success content
            </p>
          </div>
          <div>
            <X className="h-6 w-6 cursor-pointer text-green-600" />
          </div>
        </div>
      </div>
    </>
  )
}
