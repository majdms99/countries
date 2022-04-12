import { useContext } from 'react';
import './App.css';
import Cards from './pages/Cards/Cards';
import SingleCard from './pages/Cards/SingleCard'
import Navbar from './Components/Navbar/Navbar';
import { AllStateConext } from './Context/AllStatue';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import RegionPage from './pages/RegionPage';
import Footer from './Components/Footer';



function App() {


  const { dark } = useContext(AllStateConext)

  return (
    <div className={dark ? 'app dark' : 'app light'}>

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Cards} />
          <Route path='/country/:name' component={SingleCard} />
          <Route path='/search/:value' component={SearchPage} />
          <Route path='/region/:name' component={RegionPage} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>


  );
}

export default App;
