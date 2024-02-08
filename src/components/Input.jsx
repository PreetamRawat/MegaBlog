/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useId } from 'react'

const Input =  React.forwardRef(function Input({
  label,
  type="text",
  classname='',
  ...props
},ref){
  return <div className='w-full'>
    {label && <label
    className='inline-block mb-1 pl-1' htmlFor={id}>
    {label}
    </label>
    }
    <input type={type} className={ `${classname}`}
      ref={ref}
      {...props}
      id={id}
    />
  </div>
})


export default Input