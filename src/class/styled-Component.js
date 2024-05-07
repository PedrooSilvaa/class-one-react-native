import styled from "styled-components/native";

const PageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  flex: 1;
`
const PageTitle = styled.Text`
  font-size: 66px;
  font-weight: 900;
  color: black;
`

const PageSubTitle = styled.Text`
  font-size: 36px;
  font-weight: 500;
  color: black;
`
export default function App() {
  return (
    <Page.PageContainer>
      <Page.PageTitle>
        React Native
      </Page.PageTitle>
      <Page.PageSubTitle>
        Styled-Components
      </Page.PageSubTitle>
    </Page.PageContainer>
  );
}