import React, { PropTypes } from 'react'
import './JoinGame.css'
import styled from 'styled-components'

const Form = styled.form`
  background-color: rgba(0,0,50,0.6);
  padding: 50px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TextInput = styled.input`
  font-size: 24px;
  padding: 10px;
  margin-bottom: 30px;
  color: white;
  background-color: transparent;
  border: none;
  width: 70%;
  text-align: center;
  border-bottom: 3px solid white;
  transition: all .3s;

  &:focus {
    border-bottom: 3px solid #606060;
    outline: none;
  }
`

const SubmitButton = styled.input`
  background-color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 15px;
`

const JoinGame = ({handleSubmit, handleChange, name}) => {
  return (
      <Form onSubmit={handleSubmit}>
        <TextInput type='text' value={name} onChange={handleChange}/>
        <SubmitButton type='submit' value='Join Game'/>
      </Form>
  )
}

JoinGame.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default JoinGame
