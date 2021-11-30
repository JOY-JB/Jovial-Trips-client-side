import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import JoinEvent from './Pages/JoinEvent/JoinEvent';
import Login from './Pages/Login/Login';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/Myorders/MyOrders';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/Notfound';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div style={{ "height": "100vh" }} className="App flex flex-col">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/joinevent/:id">
              <JoinEvent></JoinEvent>
            </PrivateRoute>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
