import styled from 'styled-components'
import { ButtonProps } from './index'

export const ButtonContainer = styled.div<ButtonProps>`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.padding ? props.padding : '1rem')};
  line-height: 1.2;
  border-radius: 20px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.8rem')};
  letter-spacing: 1px;
  transition: 0.2s ease-in;
  text-align: center;
  text-transform: uppercase;

  &:focus {
    outline: 0;
  }

  &.delete-buttons {
    margin: 5px 0;
  }

  ${(props) => {
    const backgroundColor = props.backgroundColor
      ? props.backgroundColor
      : props.theme.color.primary
    const color = props.color ? props.color : props.theme.color.white
    const borderColor = props.borderColor ? props.borderColor : backgroundColor
    const fontWeight = props.fontWeight ? props.fontWeight : 'bold'
    const borderStyle = props.borderStyle ? props.borderStyle : 'solid'
    const centered = props.centered ? '1rem auto' : '1rem 0'
    const disabled = props.disabled ? 'not-allowed' : 'pointer'
    const textStyle = props.textStyle ? props.textStyle : ''
    const hoverColor = props.hoverColor
      ? props.hoverColor
      : props.color
      ? props.color
      : '#fff'

    let style = `
      margin: ${centered};
      background-color: ${backgroundColor};
      color: ${color};
      border: 1px ${borderStyle} ${borderColor};
      font-weight: ${fontWeight};
      cursor: ${disabled};
      text-transform: ${textStyle};
      `

    if (!props.disabled) {
      style += `
      &:hover {
        background-color: ${hoverColor};
        color: ${backgroundColor};
        border: 1px ${borderStyle} ${backgroundColor};
      }`
    }

    return style
  }}
`

export const CustomLink = styled.a`
  max-width: 100%;
  text-decoration: none;
`
