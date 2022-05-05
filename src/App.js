import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import AddItems from './Pages/AddItem/AddItems';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';

import NotFound from './Pages/Shared/NotFound/NotFound';



function App() {
  return (
    <>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        
        
        <Route path='/additems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </>
  );
}

export default App;
