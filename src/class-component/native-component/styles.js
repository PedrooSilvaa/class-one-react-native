import styled from "styled-components/native";

export const ImageContainer = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    gap: 5px;
`

export const CardContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 200px;
    height: 100px;
    border-radius: 16px;
`
export const  CardTitle = styled.Text`
    font-size: 30px;
    font-weight: 900;
    text-align: center;
`
export const  CardSubititle = styled.Text`
    font-size: 25px;
    text-align: center;
`