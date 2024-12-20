import React from 'react'

type Props = {
    title: string
}

function Title({title}: Props) {
  return (
    <div className='font-bold'>{title}</div>
  )
}

export default Title