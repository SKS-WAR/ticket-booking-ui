import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div class="w-100">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <NavLink to={"/"} className="navbar-brand">Ticket Booking UI</NavLink>
            </div>
        </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Layout;