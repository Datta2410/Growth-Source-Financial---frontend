import React from 'react'
import './Input.css'

const Input = ({ 
    label,
    name, 
    type, 
    placeholder, 
    onChange, 
    size, 
    className, 
    disabled, 
    required,
    value, 
    ...props
}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <br/>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={`${size} ${className}`}
                disabled={disabled}
                readOnly={disabled}
                required={required}
            />            
        </div>
    )
}

export default Input
