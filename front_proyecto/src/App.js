//components
import Navbar from './components/Navbar/Navbar';
// import Error from './components/Error/Error';
// import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer'

//containers
import Home from './containers/Home/Home';
import AdminForm from './containers/AdminForm/AdminForm';
// import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
// import Checkout from '../src/containers/Checkout/Checkout'

import { BrowserRouter, Switch, Route} from 'react-router-dom'
// import { AppProvider } from './context/useAppContext';

function App() {
  return (
    <div>
      {/* <AppProvider> */}

        <BrowserRouter>
        
            <Navbar />
            <Switch>

              {/* <Route exact path='/cart'>
                <Cart />
              </Route> */}

              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/home">
                <Home />
              </Route>
              
              <Route exact path="/products">
                <AdminForm />
              </Route>

              {/* <Route exact path='/products/:id'>
                <ItemDetailContainer />
              </Route> */}

              {/* <Route path='/:otro?'>
                <Error />
              </Route> */}

            </Switch>
            <Footer />
        </BrowserRouter>
      {/* </AppProvider> */}
    </div>
  );
}

export default App;