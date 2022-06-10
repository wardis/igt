import logo from './logo.svg';
import './App.css';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Content } from './components/layout/Content';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
