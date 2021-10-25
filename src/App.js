import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Dados from './pages/Dados/Dados';
// import VagaView from './pages/VagaView/VagaView';
// import Edicao from './pages/Edicao/Edicao';

function App() {
  return (
    <div className="app">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/adicionar" component={Cadastro}/>
          <Route path="/lista" component={Dados}/>
          {/* <Route path="/view/:id" component={VagaView}/>
          <Route path="/edit/:id" component={Edicao}/> */}
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;