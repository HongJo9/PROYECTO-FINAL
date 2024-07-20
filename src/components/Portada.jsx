import React from 'react'

export default function Portada({props}) {
  return (
    <>
        <div className='bg-amber-700 h-52 flex justify-center items-center'>
            <h1 className='font-bold text-5xl'>{props}</h1>
        </div>
    </>
  )
}