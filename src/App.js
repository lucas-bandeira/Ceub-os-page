import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://s1.static.brasilescola.uol.com.br/be/vestibular/-5ad8ba5235e13.jpg" className="App-logoceub" alt="logoCeub" width="180" height="90"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Ceub OS</b>
        </p>
        <a className="App-equipe" >
          Temos equipes de produção do CORE (base) do sistema operacional, 
          do  VISUAL E APARÊNCIA, DIVULGAÇÃO, LISTAS DE PACOTES E PROGRAMAS.  
        </a>
      </header>
      <body className="App-body">
      <p className="App-objetivo">
        <h2>Qual o objetivo do projeto? A quem se destina esse novo sistema? Esse projeto poderia ser realizado de forma que a participação seja voluntária?</h2>
        <p>
          O projeto faz parte da trilha da disciplina Sistemas Operacionais, e tem como objetivo trazer para dentro da sala de aula os conhecimentos práticos envolvidos sobre sistemas operacionais. A escolha de uma distribuição Linux, que recebeu nome em votação pelos próprios alunos, deve-se ao fato de ser livre, 
          de  possível reconstrução, de utilizar padrão POSIX, ser acadêmico, ser virtualizado com facilidade, permitindo que até mesmo alunos que ainda não tem conhecimento 
        </p>
      </p>
      <p className="App-task">
      <h2>O que cada parte do projeto CEUB-OS precisa fazer? O que se espera que cada grupo faça? Qual o nível de conhecimento necessário para ser útil em cada grupo?</h2>
      <p>
      <strong className="App-core">CORE: </strong>
      <p>Grupo responsável pela montagem do núcleo do sistema operacional e suas dependências. Escolhe os programas e acessórios básicos do sistema operacional. </p>
      </p>
      <p>
      <strong className="App-visual">VISUAL E APARÊNCIA: </strong>
      <p>Essa equipe é responsável por conhecer as possibilidades de ambiente gráficos e gestor de janelas do Linux. Basicamente o aluno vai observar distribuições linux já existentes, analisar o visual, estudar a UX, escolher recursos de facilidades e usabilidades. Também é responsável por logo, marca, papéis de parede, ícones, personalizações em menus, acessibilidade</p>
      </p>
      <p>
      <strong className="App-public">DIVULGAÇÃO:</strong>
      <p>Na equipe é necessário saber descrever todo o processo. Serão responsáveis por coletar depoimentos de alunos participantes e usuários em testes. Escreverão texto para o site, para release com imprensa, sempre abordando as características técnicas, pedagógicas, sociais e pós pandemia apresentada pelo projeto.</p>
      </p>
      <p>
      <strong className="App-pacote">PACOTES GERAIS E ESPECÍFICOS:</strong>
      <p>Aqui seremos responsáveis por escolher os programas que virão instalados no sistema operacional. As possibilidades são de mais de 15 mil pacotes disponíveis só no main do debian (árvore principal só com software GPL v2). Há ainda a possibilidade de adicionar os repositório contrib e non-free, agregando ainda mais drivers de dispositivos e possibilidades operacionais de interfaces ao sistema operacional.</p>
      </p>
      <p>
        <strong className="App-welcome">TELA DE BOAS VINDAS: </strong>
        <p>Essa equipe é responsável por preparar o instalador do sistema operacional que funcionará quando uma sessão live (inicialização pelo pendrive) acontece, permitindo instalar o sistema na maioria dos computadores existentes no mercado.</p>
      </p>
      </p>
      <h1>Qual resultado final do CEUB-OS?</h1>
      <p>O resultado final do projeto é a geração de uma imagem ISO distribuível capaz de inicializar na maioria dos computadores disponíveis no mercado. Também é apresentada a oportunidade de se conhecer mais sobre gerenciador de processos, 
Programas como ferramenta de stream sofisticadas, editores de texto e imagem estarão presentes na imagem instalável e utilizável em modo live (inicializável pelo pendrive) em licença a ser definida (porém open source) e disponível para qualquer pessoa.
</p>
      </body>
    </div>
  );
}


export default App;
