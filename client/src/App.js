import React from 'react';
import AppNavbar from './components/AppNavbar/AppNavbar';
import ShoppingList from './components/ShoppingList/ShoppingList';
import NewItemBar from './components/NewItemBar/NewItemBar';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider }from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container style={{width: '50%'}}>
          <NewItemBar />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
