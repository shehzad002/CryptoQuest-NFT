import WebFont from 'webfontloader';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/menu/navbar';
import Jumbo from './components/jumbo/index';
import Section from './components/section/index';
import Footer from './components/footer/index';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'Island-Moments']
  }
});

function App() {
  return (
    <div>
    <Navbar />
    <Jumbo />
    <Section />
    <Footer />
    </div>
  );
}

export default App;
