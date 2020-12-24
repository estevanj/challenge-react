import React from 'react'

import { StyledInput, StyledError } from './style'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: boolean
  backgroundColor?: string
  borderColor?: string
}

export const InputForm = ({
  label,
  backgroundColor,
  borderColor,
  required,
  ref,
  as,
  error,
  ...props
}: InputProps) => (
  <>
    <label>
      {required && '*'} {label}
    </label>
    <StyledInput {...props} required={required} />
  </>
)
