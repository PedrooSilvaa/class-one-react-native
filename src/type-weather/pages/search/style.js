
import styled from "styled-components/native";


export const Container = styled.ImageBackground`
flex: 1;
display: flex;
flex-direction: column;
`

export const HeaderContainer = styled.View `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: auto;
gap: 10px;
margin-top: 100px;
`

export const HeaderImage = styled.Image `
width: 36px;
height: 24px;
`

export const HeaderTitle = styled.Text `
font-size: 20px;
color: white;
font-weight: bold;
`

// ----------------------

export const MainContainer = styled.View `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: auto;
height: 400px;
gap: 10px;
margin-top: 100px;
`

export const MainTitle = styled.Text `
font-size: 30px;
color: white;
font-weight: bold;
`

export const MainTitleInside = styled.Text `
font-size: 30px;
color: #8FB2F5;
font-weight: bold;
`
export const MainSubTitle = styled.Text `
font-size: 15px;
color: white;
`

export const MainInput = styled.TextInput `
width: 70%;
font-size: 20px;
padding: 20px;
border-radius: 10px;
color: #7F7F98;
background-color: #1E1E29;
`