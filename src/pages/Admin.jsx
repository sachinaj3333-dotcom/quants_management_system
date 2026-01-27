import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar.jsx';
import Navbar from '../components/admin/Navbar.jsx';
import ClosedSidebar from '../components/admin/ClosedSidebar.jsx';
import Dashboard from '../components/admin/Dashboard.jsx';

const AdminPortal = () => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="admin_portal">
        <div className="row  g-0">
          <div className={`${isOpen ? "col-2" : "col-1"} ${isOpen ? "transitioncss" : "closesidebarcss"}`}>
            {isOpen ? <Sidebar /> : <ClosedSidebar />}
          </div>
          <div className={`${isOpen ? "col-10" : "col-11"} ${isOpen ? "transitioncss" : "opensidebarcss"}`}>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Dashboard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPortal;