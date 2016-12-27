import React, {PropTypes} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 15px;
`

const Button = ({text, onClick, disabled}) => {
  return <StyledButton disabled={disabled} onClick={onClick}>{text}</StyledButton>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default Button
