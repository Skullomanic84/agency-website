import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import styled from 'styled-components'

function App() {
  return (
    <Container>
      {/* components are wrapped in the container components */}
     <Navbar />
     <Header />
     <BannerShape />
      {/* end of the container component */}
    </Container>
  );
}

export default App;

const Container = styled.div `
  height: 100%;
  position: relative;
`
const BannerShape = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  clip-path: polygon(100% 0%, 60% 0%, 36% 100%, 100% 100%);
  background-color: #8c7851;
  top: 0;
  left: 0;
  z-index: -1;
`