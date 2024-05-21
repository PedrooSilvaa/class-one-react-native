import React from 'react'
import { Text } from 'react-native'
import { Container, HeaderContainer, HeaderImage, HeaderInput, HeaderLocalImage, HeaderSubContainer, HeaderContainerImageAndInput, HeaderImageTemp } from './style'
import Cloud from '../../assets/images/Cloud-icon.png'
import TempImage from '../../assets/images/Today.png'
import { Header } from 'react-native/Libraries/NewAppScreen'

const Main = () => {
  return (

    <Container>
      <HeaderContainer>
        <HeaderSubContainer>
          <HeaderContainerImageAndInput>
            <HeaderLocalImage>
              <HeaderImage source={Cloud}/>
            </HeaderLocalImage>
            <HeaderInput placeholder='Buscar local' placeholderTextColor='#7F7F98'/>
          </HeaderContainerImageAndInput>
            <HeaderImageTemp source={TempImage}></HeaderImageTemp>
        </HeaderSubContainer>
      </HeaderContainer>
    </Container>
  
    
  )
}

export default Main