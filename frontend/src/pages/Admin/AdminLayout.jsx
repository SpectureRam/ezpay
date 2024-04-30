import React from 'react'
import PropTypes from 'prop-types';
import AdminSidebar from '../../components/Admin/AdminSidebar';
 const AdminLayout = ({children}) => {
  return (
    <div className='flex  h-screen w-full'>
        <aside className='w-[17.5%]'>
        <AdminSidebar/>
        </aside>
        <main className='w-[82.5%] h-full bg-teal-50 '>
            {children}
        </main>

        {/* <footer>
            footer
        </footer> */}
    </div>
  )
}


AdminLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default AdminLayout
