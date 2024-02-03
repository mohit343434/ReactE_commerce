import React, { useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import Footer from "../layouts/Footer";
import { Outlet, useNavigate } from "react-router-dom";
function AdminLayout() {
  const navigate = useNavigate();
  useEffect(()=>{
   const  token =  localStorage.getItem('token')
   if(!token) {
    navigate('/login')
   }

  })
  return (
    <>
      <AdminNavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminLayout;
