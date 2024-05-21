
//Styled
import { ImageBackground, Image} from 'react-native'

import Background from '../../assets/images/Background.png'
import Cloud from '../../assets/images/Cloud-icon.png'
import {Container, HeaderContainer, HeaderImage, HeaderTitle, MainContainer, MainInput, MainSubTitle, MainTitle, MainTitleInside} from './style'

import React from 'react'

const Search = () => {
return (

    <Container source={Background}>
        <HeaderContainer>
            <HeaderImage source={Cloud}/>
            <HeaderTitle>TypeWeather</HeaderTitle>
        </HeaderContainer>
        <MainContainer>
            <MainTitle>Boas vindas ao <MainTitleInside>TypeWeather</MainTitleInside></MainTitle>
            <MainSubTitle>Escolha um local para ver a previsão do tempo</MainSubTitle>
            <MainInput placeholder='Buscar local'
            placeholderTextColor='#7F7F98'></MainInput>
        </MainContainer>
    </Container>

)
}

export default Search