import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { HeaderBt } from './components/HeaderBt';
import { Footer } from './components/Footer';
import Content from './components/Content';
import Page_number from './components/Page_number';
function App() {
  
  return (
    <div className="App">
      <Header />
      <HeaderBt />
      <Content />
      <Page_number />
      <Footer />
    </div>
  );
}

export default App;
