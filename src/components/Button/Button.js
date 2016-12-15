import React, {PropTypes} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 15px;
`

const Button = ({text, onClick}) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
