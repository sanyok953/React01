import React from 'react'
import s from './FormsControls.module.css'

// creator custom
export const CustomInput = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={s.formControl + " " + (hasError ? s.error : '')}>
      <div>
        {props.creator === 'input' ? <input {...input} {...props} /> : <textarea {...input} {...props} />}
      </div>
      { hasError && <span>{meta.error}</span> }
    </div>
  )
}