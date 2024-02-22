import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Data from './components/showdata/Data';
import Update from './components/update/Update';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Pagination from './components/pagination/Pagination';
import Search from './components/search/Search';

function App() {
  return (
  <>
  <div></div>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='sign-up' element={<Signup/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='pagi' element={<Pagination/>}/>
        <Route path='update/:id' element={<Update/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
