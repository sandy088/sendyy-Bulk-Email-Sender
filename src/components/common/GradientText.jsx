import React from 'react'

export const GradientText = ({text}) => {
  return (
    <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
      {text}
    </div>
  )
}
