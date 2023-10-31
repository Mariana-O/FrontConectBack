import React from 'react'
import Navbar from '../navbar/Navbar';
import LoginButton from '../login/LoginLogoButton';
import MainImg from '../mainimg/MainImg';
import Card from '../card/Card';

function Home(){
    return(
        <>
        <LoginButton/>
        <Navbar
        Nav1='Home'
        Nav2='Cadastro de Usuarios'
        Nav3='Cadastro de Produtos'
        Nav4='Cadastro de Vendas'/>
        <MainImg/>
        <Card/>
        </>
    )

}

export default Home;