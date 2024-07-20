import React, { createContext } from 'react'
export const ContextApp=createContext()

export default function ContextProvider( {children} ) {
  return (
    <div>Hola mundo {children}</div>
  )
}
