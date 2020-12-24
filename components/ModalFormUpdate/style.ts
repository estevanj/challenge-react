import styled from 'styled-components'

export const BtnClose = styled.button`
  background-color: transparent;
  border: 0;
  right: 1rem;
  position: absolute;
  cursor: pointer;
  top: 1rem;
  color: #fff;
  font-size: 21px;
`

const overlay: React.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: '1.2rem',
  zIndex: 99,
}

const content: React.CSSProperties = {
  backgroundColor: '#0f1924',
  boxShadow: '0 0 8px 0 rgba(0, 0, 0, -0.2)',
  color: '#FFFFFF',
  padding: '2rem',
  border: 0,
  top: '30%',
  bottom: 'auto',
  left: '50%',
  right: 'auto',
  width: '40rem',
  maxWidth: 'calc(100% - 2.5rem)',
  margin: '0 auto',
  transform: 'translate(-50%)',
}

export const modalStyles = {
  overlay: overlay,
  content: content,
}
