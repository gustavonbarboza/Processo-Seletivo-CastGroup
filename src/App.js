import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;