import './App.css';
 import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/ContactUs/Contact';
import Notfound from './components/Notfound/Notfound';
import Home from './components/Home/Home';

function App() {
  return (
   <div>
      
   <Router>
     {/* fixed header component */}
     <Header></Header>
     <Switch>
       <Route exact path='/'>
         {/* default home */}
        <Home></Home>
       </Route>
       <Route exact path='/home'>
         <Home></Home>
       </Route>
       <Route exact path='/about'>
         <About></About>
       </Route>
       <Route exact path='/services'>
         <Services></Services>
       </Route>
       <Route exact path='/contact'>
         <Contact></Contact>
       </Route>
       <Route exact path='/*'>
         {/* notfound */}
         <Notfound></Notfound>
       </Route>
     </Switch>
     {/*fixed footer component */}
     <Footer></Footer>
   </Router>
   </div>
   
  );
}

export default App;
