/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useId } from 'react'

const Input =  React.forwardRef(function Input({
  label,
  type="text",
  classname='',
  ...props
},ref){
  return <div className='w-full'></div>
})


export default Input