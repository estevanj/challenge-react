import React from 'react'
import Link from 'next/link'
import { ButtonContainer, CustomLink } from './style'

export type ButtonProps = {
  children?: React.ReactNode
  backgroundColor?: string
  id?: string
  className?: string
  borderColor?: string
  color?: string
  hoverColor?: string
  fontWeight?: string
  borderStyle?: string
  padding?: string
  fontSize?: string
  centered?: boolean
  to?: string
  onClick?: () => void
  disabled?: boolean
  textStyle?: string
}

const Button = ({
  backgroundColor,
  borderColor,
  id,
  className,
  color,
  hoverColor,
  fontWeight,

  borderStyle,
  centered,
  children,
  to,
  padding,
  fontSize,
  disabled,
  textStyle,
  onClick,
  ...props
}: ButtonProps) => {
  const Component = () => (
    <ButtonContainer
      {...props}
      id={id}
      className={className}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
      hoverColor={hoverColor}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      children={children}
      onClick={onClick}
      borderStyle={borderStyle}
      centered={centered}
      disabled={disabled}
      textStyle={textStyle}
    />
  )

  return to ? (
    <Link href={to}>
      <CustomLink>
        <Component />
      </CustomLink>
    </Link>
  ) : (
    <Component />
  )
}

export default Button
