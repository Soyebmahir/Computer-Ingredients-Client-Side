
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
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
import Payment from './components/Dashboard/Payment';
import AddProducts from './components/Dashboard/AddProducts';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className='container mx-auto'>
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
          <Route index element={<Profile></Profile>}></Route>
          <Route path="review" element={<AddReviews></AddReviews>}></Route>
          <Route path="order" element={<Orders></Orders>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="user" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
          <Route path="manageOrder" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
