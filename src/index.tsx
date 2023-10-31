import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Card from './components/card/Card';
//import LoginButton from './components/login/LoginLogoButton';
//import UserInput from './components/userinput/UserInput';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Card from './components/card/Card';
import Home from './components/home/Home';
import CadastroUsuario from './components/cadastrousuarios/CadastroUsuario';
import CadastroProduto from './components/cadastroproduto/CadastroProdutos';
import CadastroVendas from './components/cadastrovendas/CadastroVendas';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <>
    <BrowserRouter basename='/pi'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usuarios' element={<CadastroUsuario/>}/>
        <Route path='/produtos' element={<CadastroProduto/>}/>
        <Route path='/vendas' element={<CadastroVendas/>}/>
        <Route path='*' element={<Card/>}/>
      </Routes>
    </BrowserRouter>
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
