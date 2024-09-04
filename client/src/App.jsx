import {BrowserRouter,Routes,Route}from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/About' element={<About/>}/>
      <Route  element={<PrivateRoute/>}>
       <Route path='/profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
  
}
 