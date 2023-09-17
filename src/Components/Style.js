import React from 'react'
import './My.css'

export default function Style(props) {
let className=props.primary ? 'primary' :''

  return (
    <div>
      <h2 className={className}>Hello Sameer </h2>
    </div>
  )
}
