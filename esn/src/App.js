import './App.css';
import Body from './pages/Body/Body';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';

function App() {
  return (
    <div className='app'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
  );
}

export default App;
