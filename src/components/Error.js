import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const errorMessage = useRouteError()
  return (
    <div className="text-red-600 font-bold text-2xl p-4">{errorMessage.status+" - "+errorMessage.error.message}</div>
  )
}

export default Error