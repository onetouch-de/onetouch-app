import { Button, Container,Form,FormLabel,Jumbotron } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './auth/Auth';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Auth/>}></Route>
    </Routes>
  </BrowserRouter>
)

export default App;
