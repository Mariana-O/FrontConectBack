import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Navbar';
import MainImage from './components/mainimage/PlaceH';
import Card from './components/card/Card';
import LoginButton from './components/login/LoginLogoButton';
//import UserInput from './components/userinput/UserInput';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <LoginButton/>
    <Navbar
    Nav1='Home'
    Nav2='Cadastro de Usuários'
    Nav3='Cadastro de Produtos'
    Nav4='Cadastro de vendas'/>
    <MainImage/> */}
    <Card/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
