import React, {useState} from 'react'
import {MainContainer, Form, Input} from './styles'


const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const sendData = () => {
  const dadosPessoa = {
    nome: name,
    idade: age,
    email: email
  }
  console.log(dadosPessoa)
  setName("")
  setAge("")
  setEmail("")
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input type={'text'} placeholder="Nome" value={name} onChange={onChangeName}/>
        </label>
        <label>
          Idade:
          <Input type={'number'} placeholder="Idade" value={age} onChange={onChangeAge}/>
        </label>
        <label>
          E-mail:
          <Input type={'email'} placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail}/>
        </label>
      <button onClick={sendData}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage