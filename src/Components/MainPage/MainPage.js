import React from "react";
import { MainContainer, Form, Input } from "./styles";
import { useState } from "react";

function MainPage() {
  const [nome, setNome] = useState("");
  const pegarValorInputNome = (event) => {
    //console.log(event.target.value);
    setNome(event.target.value);
  };
  const [idade, setIdade] = useState("");

  function pegarIdade(event) {
    //console.log(event.target.value);
    setIdade(event.target.value);
  }

  const [estadoCivil, setEstadoCivil] = useState("");
  function pegarEstadoCivil(event) {
    //console.log(event.target.value);
    setEstadoCivil(event.target.value);
  }

  function limparInputs() {
    setNome('')
    setEstadoCivil('')
    setIdade('')
    setEmail('')
    setSenha('')
  }

  function imprimirValoresInputs(event) {
    event.preventDefault();
    console.log(`
    Nome : ${nome}
    Idade : ${idade}
    Estado civil : ${estadoCivil}
    Email: ${email}

    Senha : ${senha}
    
    `)

    limparInputs()
  }

  const [email, setEmail] = useState("");

  function pegarEmail(event) {
    setEmail(event.target.value);
  }

  const [senha, setSenha] = useState("");
  function pegarSenha(event) {
    setSenha(event.target.value);
  }

  

  // function limparValoresInputs(){
  //   console.log(`
  //   Nome : ${nome}
  //   Idade : ${idade}
  //   Estado civil : ${estadoCivil}
  //   Email: ${email}
  //   Senha : ${senha}
  //   `);

  //   limparInputs()
  // }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={imprimirValoresInputs}>
        <label>
          Nome:
          <Input value={nome} onChange={pegarValorInputNome} />
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={pegarIdade} />
        </label>
        <label>Email:</label>
        <Input value={email} onChange={pegarEmail} />
        <label>
          <label>Senha:</label>
          <Input type="password" value={senha} onChange={pegarSenha} />
          Estado Civil:
          <br />
          <select value={estadoCivil} onChange={pegarEstadoCivil}>
            <option>Selecionar</option>
            <option>Casado(a)</option>
            <option>Solteiro(a)</option>
            <option>Viuvo(a)</option>
            <option>Divorciado(a)</option>
          </select>
        </label>
        <button onClick={imprimirValoresInputs}>Enviar dados</button>
        {/* <button onClick={limparValoresInputs}>Limpar dados</button> */}
      </Form>
    </MainContainer>
  );
}

export default MainPage;





// import React from 'react'
// import { MainContainer, Form, Input } from './styles'

// function MainPage() {
//   return (
//     <MainContainer>
//       <h2>Formulário de inscrição</h2>
//       <Form>
//         <label>
//           Nome:
//           <Input />
//         </label>
//         <label>
//           Idade:
//           <Input />
//         </label>
//         <button>Enviar dados</button>
//       </Form>
//     </MainContainer>
//   )
// }

// export default MainPage
