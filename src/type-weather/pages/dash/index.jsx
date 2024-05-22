import React from 'react'
import { Container, HeaderContainer, HeaderImage, HeaderInput, HeaderLocalImage, HeaderSubContainer, HeaderContainerImageAndInput, HeaderImageTemp, DetailContainer, DetailSubContainer, DetailImageIcons, DetailText, DetailTextInfo, FooterContainer, FooterSubContainer, FooterText, FooterImageIcons, FooterTextInfo } from './style'
import Cloud_Icon from '../../assets/images/Cloud-icon.png'
import TempImage from '../../assets/images/Today.png'
import Rain from '../../assets/images/rain.png'
import Sun from '../../assets/images/sun.png'
import Temp from '../../assets/images/temp.png'
import Water from '../../assets/images/water.png'
import Wind from '../../assets/images/wind.png'
import ChuvaRaio from '../../assets/images/chuva-raio.png'
import Sol from '../../assets/images/sol2.png'
import SolNuvem from '../../assets/images/sol-nuvem.png'
import Nuvem from '../../assets/images/nuvem.png'
import Chuva from '../../assets/images/chuva.png'
import { ScrollView } from 'react-native'

const Dash = () => {
  return (

    <ScrollView>
      <Container>

        <HeaderContainer>
          <HeaderSubContainer>
            <HeaderContainerImageAndInput>
              <HeaderLocalImage>
                <HeaderImage source={Cloud_Icon}/>
              </HeaderLocalImage>
              <HeaderInput placeholder='Buscar local' placeholderTextColor='#7F7F98'/>
            </HeaderContainerImageAndInput>
              <HeaderImageTemp source={TempImage}></HeaderImageTemp>
          </HeaderSubContainer>
        </HeaderContainer>
      
        <DetailContainer>
          
          <DetailSubContainer>
            <DetailImageIcons source={Temp}></DetailImageIcons>
            <DetailText>Sensação térmica</DetailText>
            <DetailTextInfo>26°c</DetailTextInfo>
          </DetailSubContainer>

          <DetailSubContainer>
            <DetailImageIcons source={Rain}></DetailImageIcons>
            <DetailText>Probabilidade de chuva</DetailText>
            <DetailTextInfo>0%</DetailTextInfo>
          </DetailSubContainer>

          <DetailSubContainer>
            <DetailImageIcons source={Wind}></DetailImageIcons>
            <DetailText>Velocidade do vento</DetailText>
            <DetailTextInfo>8 km/h</DetailTextInfo>
          </DetailSubContainer>

          <DetailSubContainer>
            <DetailImageIcons source={Water}></DetailImageIcons>
            <DetailText>Umidade do ar</DetailText>
            <DetailTextInfo>40%</DetailTextInfo>
          </DetailSubContainer>

          <DetailSubContainer>
            <DetailImageIcons source={Sun}></DetailImageIcons>
            <DetailText>Indice UV</DetailText>
            <DetailTextInfo>5</DetailTextInfo>
          </DetailSubContainer>

    

        </DetailContainer>

        <FooterContainer>
          <FooterSubContainer>
            <FooterText>
              Ter
            </FooterText>

            <FooterImageIcons source={Sol}/>

            <FooterText>
              32°c
            </FooterText>
            <FooterTextInfo>
              26°c
            </FooterTextInfo>
          </FooterSubContainer>

          <FooterSubContainer>
            <FooterText>
              Qua
            </FooterText>

            <FooterImageIcons source={Sol}/>

            <FooterText>
              32°c
            </FooterText>
            <FooterTextInfo>
              26°c
            </FooterTextInfo>
          </FooterSubContainer>

          <FooterSubContainer>
            <FooterText>
              Qui
            </FooterText>

            <FooterImageIcons source={Sol}/>

            <FooterText>
              32°c
            </FooterText>
            <FooterTextInfo>
              26°c
            </FooterTextInfo>
          </FooterSubContainer>

          <FooterSubContainer>
            <FooterText>
              Sex
            </FooterText>

            <FooterImageIcons source={Sol}/>

            <FooterText>
              32°c
            </FooterText>
            <FooterTextInfo>
              26°c
            </FooterTextInfo>
          </FooterSubContainer>

          <FooterSubContainer>
            <FooterText>
              Sab
            </FooterText>

            <FooterImageIcons source={Sol}/>

            <FooterText>
              32°c
            </FooterText>
            <FooterTextInfo>
              26°c
            </FooterTextInfo>
          </FooterSubContainer>
        </FooterContainer>

      </Container>
    </ScrollView>

  
    
  )
}

export default Dash