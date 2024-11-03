import Header from './screens/Header';
import NavBar from './screens/NavBar';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Outlet/>
        </Container>
      <NavBar />
    </div>
  );
}


export default App;
