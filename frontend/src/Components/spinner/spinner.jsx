import React from 'react'
import "./spinner.css"

export default function Spinner(props) {
    const fontsize = props.fontsize
    const color = props.color
  return (
    <i class="fa-solid fa-spinner spinner" style={{fontSize:fontsize,color:color}}></i>  )
}

