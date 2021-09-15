import styled from "styled-components";
import Songs from "./Songs";

function App() {
  return (
  <div>
    <Background>
    <HeaderText> 
    <h2>Song!</h2>
  <Songs/>
  </HeaderText>
  </Background>
  </div>

  )
};

const HeaderText = styled.h2`
  color: white !important;
`;
const Background = styled.div`
background: rgb(2,0,36);
background: linear-gradient(90deg, 
rgba(2,0,36,1) 0%, 
rgba(78,9,121,1) 32%, 
rgba(0,212,255,1) 100%);
min-height: 100vh;
`


export default App;
