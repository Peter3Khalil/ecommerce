"use client"
import React, { FC } from 'react'
type Props={
    data:any[]
}
const ClientComponent:FC<Props> = ({data}) => {
  return (
    <ul>
        {data.map((item,i)=><li key={i}>{item?.name}</li>)}
    </ul>
  )
}

export default ClientComponent