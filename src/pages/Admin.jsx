import React from 'react'
import Sidebar from '../components/admin/Sidebar.jsx';
import Navbar from '../components/admin/Navbar.jsx';

const AdminPortal = () => {
  return (
    <>
      <div className="admin_portal">
        <div className="row  g-0">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Navbar/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPortal;