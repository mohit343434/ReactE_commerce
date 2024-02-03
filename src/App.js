import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserSignup from "./component/home/UserSignup";
import UserLogin from "./component/home/UserLogin";
import Forgotpassword from "./component/home/Forgotpassword";
import HomeLayout from "./component/layouts/HomeLayout";
import LoginUserLayout from "./component/usersection/LoginUserLayout";
import Addproduct from "./component/admin/Addproduct";
import ShowProduct from "./component/home/ShowProduct";
import AdminLayout from "./component/admin/AdminLayout";
import ProductTable from "./component/admin/ProductTable";
import Error from "./component/Error";
import Update from "./component/admin/Update";
import ShowUser from "./component/admin/ShowUser";
import AdminDas from "./component/admin/AdminDas";
import OneProduct from "./component/home/OneProduct";
import Api from "./component/Api";
import Payment from "./component/Payment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<HomeLayout />}>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/api" element={<Api/>} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/forgot" element={<Forgotpassword />} />
            <Route  path="/show"  element={<ShowProduct />} />
            <Route  path="/oneShow"  element={<OneProduct/>} />
          </Route>
          <Route path="/user" element={<LoginUserLayout />}>
            <Route path="/user/show" element={<ShowProduct />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/product" element={<Addproduct />} />
            <Route path="/admin/show" element={<ProductTable />} />
            <Route path="/admin/update" element={<Update />} />
            <Route path="/admin/user" element={<ShowUser/>} />
            <Route path="/admin/das" element={<AdminDas/>} />
          </Route>
          <Route path="*" element={<Error/>}  />
        </Routes>
      </Router>
    </>
  );
}

export default App;
