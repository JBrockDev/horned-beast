import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import beasts from './data/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header title="Horned Beasts"/>
      <Main items={beasts} />
      <Footer author="Jonathan Brock"/>
    </>
  );
}

export default App;
