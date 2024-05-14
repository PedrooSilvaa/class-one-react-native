import React from "react";
import {Button, Alert} from 'react-native';
import * as S from'./styles.js';

function CreativeCard(props){
    return(
        <S.CardContainer>
            <Button
            title="Click Here"
            onPress={() => Alert.alert(props.title + " é considerado um ótimo " + props.description)}/>
            <S.CardTitle>{props.title}</S.CardTitle>
            <S.CardSubititle>{props.description}</S.CardSubititle>
        </S.CardContainer>
    )
}

/* FC = Function component - usado para importar components, igual ao function
do app original porem de um jeito novo e mais moderno*/
const CreativeComponent = React.FC = () => {
    return (
        <S.ImageContainer>
            <CreativeCard title="Pedro" description="Programador"/>
            <CreativeCard title="Lapa" description="Recruta"/>
            <CreativeCard title="Luccas" description="Professor"/>
        </S.ImageContainer>
    );
}

export default CreativeComponent;


