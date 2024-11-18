import React, { useState } from 'react';
import './App.css';

function App() {
  // Estados para o formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  // Estado para armazenar os usuários cadastrados
  const [usuarios, setUsuarios] = useState([]);

  // Função para lidar com o cadastro
  const cadastrarUsuario = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (nome.trim() === '' || email.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Cria o novo usuário e adiciona ao estado
    const novoUsuario = { nome, email };
    setUsuarios([...usuarios, novoUsuario]);
    setNome(''); // Limpa o campo nome
    setEmail(''); // Limpa o campo email
  };

  // Função para remover um usuário
  const removerUsuario = (index) => {
    const novaLista = usuarios.filter((_, i) => i !== index);
    setUsuarios(novaLista);
  };

  return (
    <div className="App">
      <h1>Cadastro de Usuários</h1>
      <form onSubmit={cadastrarUsuario}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Usuários Cadastrados</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            <strong>Nome:</strong> {usuario.nome} <br />
            <strong>E-mail:</strong> {usuario.email} <br />
            <button onClick={() => removerUsuario(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
