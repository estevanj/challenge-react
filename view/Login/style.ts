import styled from 'styled-components'
//import sizes from '../../styles/media'


export const WrapperLogin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  input:focus ~ label,
  input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

}
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
`
export const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}
`
export const ContentForm = styled.h2`
position: relative;
}
`
export const Label = styled.label`
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
}
`
export const Button = styled.button`
position: relative;
display: inline-block;
padding: 10px 20px;
color: #03e9f4;
font-size: 16px;
text-decoration: none;
text-transform: uppercase;
overflow: hidden;
margin-top: 40px;
letter-spacing: 4px;
background: none;
border: 1px solid #03e9f4;
}
`

