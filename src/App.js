import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.sass';
import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/layout/Home/Home';
import Oferta from './components/layout/OfferPage/OfferPage';
import NotFound from './components/layout/NotFoundPage/NotFound';
import Survey from './components/layout/SurveyPage/Survey';
import Footer from './components/layout/Footer/Footer';
import Cookies from './components/layout/Cookies/Cookies';
import PrivacyPolicy from './components/layout/PrivacyPolicyPage/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

const Scroll = withRouter(ScrollToTop);

function App() {
  return (
    <Router>
      <Scroll>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/oferta/:id' component={Oferta} />
          <Route path='/ankieta' component={Survey} />
          <Route path='/polityka-prywatnosci' component={PrivacyPolicy} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <Cookies />
      </Scroll>
    </Router>
  );
}

export default App;
