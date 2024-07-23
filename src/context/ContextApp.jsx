import React, { createContext } from 'react'
export const ContextApp=createContext()
imp

export default function ContextProvider( {children} ) {
  return (
    <div>Hongjo {children}</div>
  )
}
