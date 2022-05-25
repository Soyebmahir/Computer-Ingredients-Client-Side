
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import AddReviews from './components/Dashboard/AddReviews';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Dashboard/Orders';
import Profile from './components/Dashboard/Profile';
import Users from './components/Dashboard/Users';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAdmin from './components/Login/RequireAdmin';
import RequireAuth from './components/Login/RequireAuth';
import SignUp from './components/Login/SignUp';
import Purchase from './components/Purchase';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>
        </Route>
        {/* nested route  */}
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<Orders></Orders>}></Route>
          <Route path="review" element={<AddReviews></AddReviews>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="user" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
