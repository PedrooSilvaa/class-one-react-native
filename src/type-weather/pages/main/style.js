import styled from "styled-components/native";

export const Container = styled.View `
flex: 1;
background-color: #13131A;
`

export const HeaderContainer = styled.View`

    display: flex;
    flex-direction: row;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
    gap: 10px;

`
export const HeaderSubContainer = styled.View`
    display: flex;
    flex-direction: column;
    background-color: #16161F;
    border-radius: 10px;
    padding: 20px 0;
    width: 90%;
`
export const HeaderContainerImageAndInput = styled.View`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0 13px 20px 13px;
    align-items: center;
    gap: 15px;
    width: 90%;
`

export const HeaderLocalImage = styled.View `
    background-color: #1E1E29;
    padding: 17px 10px;
    border-radius: 10px;
`

export const HeaderImage = styled.Image `
    width: 36px;
    
`

export const HeaderInput = styled.TextInput `
    width: 80%;
    font-size: 20px;
    padding: 20px;
    border-radius: 10px;
    color: #7F7F98;
    background-color: #1E1E29;
`

export const HeaderImageTemp = styled.Image `
    width: 320px;
    border-radius: 10px;
    height: 304px;
    margin: 0 13px;
`