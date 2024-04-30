import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { RiUserLine, RiSettings3Line, RiQuestionLine, RiComputerLine, RiBarChart2Line } from 'react-icons/ri'; // Import relevant icons
import logo from '../../assets/login/logo2.png';
import { GrTransaction } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import AlertDialogSlide from './LogoutDialog';
import { HiOutlineLogout } from "react-icons/hi";

function AdminSidebar() {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsLogoutDialogOpen(true);
  };

  const handleCloseLogoutDialog = () => {
    setIsLogoutDialogOpen(false);
  };
  return (
    <div className='h-full fixed'>
      <Sidebar className='h-full'>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem className='pt-3 border-b-2'>
            <img width={100} src={logo} alt="Logo"/>
          </MenuItem>
         
          <SubMenu 
          className=''
          label="Users" icon={<RiUserLine />}>
            <MenuItem>
              <Link to="/EZpay/admin/user-management">User Management</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/customer-support">Customer Support</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu 
          className=''
          label="Plans" icon={<RiUserLine />}>
            <MenuItem>
              <Link to="/EZpay/admin/add-plans">Add Plans</Link>
            </MenuItem>
            <MenuItem>
              <Link to="manage-plans">Manage Plans</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu label="Transactions" icon={<GrTransaction />} >
            <MenuItem>
              <Link to="customer-recharges">Recharges</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/top-ups">Top-ups</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/bill-payments">Bill Payments</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu label="Settings" icon={<RiSettings3Line />}>
            <MenuItem>
              <Link to="/general-settings">General Settings</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/payment-gateway">Payment Gateway</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/notifications">Notifications</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/security">Security</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu label="Help & Support" icon={<RiQuestionLine />}>
            <MenuItem>
              <Link to="/faq">FAQ</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/knowledge-base">Knowledge Base</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contact-support">Contact Support</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu label="Finance" >
            <MenuItem>
              <Link to="/revenue-tracking">Revenue Tracking</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/expense-management">Expense Management</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/financial-reports">Financial Reports</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu label="System" icon={<RiComputerLine />}>
            <MenuItem>
              <Link to="/system-logs">System Logs</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/maintenance">Maintenance</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/backup-restore">Backup & Restore</Link>
            </MenuItem>
          </SubMenu>

          <SubMenu label="Analytics" icon={<RiBarChart2Line />}>
            <MenuItem>
              <Link to="/transaction-analytics">Transaction Analytics</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/user-analytics">User Analytics</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/performance-metrics">Performance Metrics</Link>
            </MenuItem>
          </SubMenu>
          <div className='h-[1px] bg-gray-400 mx-2 my-5'></div>
        <div className='flex bottom-0   items-center justify-center'>
          <div className='w-full items-center justify-center flex flex-col'>
          <CgProfile className='text-4xl'/>
          <h1 className='text-sec text-center'>Admin1</h1>
          </div>
        </div>
        <AlertDialogSlide open={isLogoutDialogOpen} handleClose={handleCloseLogoutDialog} />
        {/* <MenuItem icon={<HiOutlineLogout />} onClick={handleLogoutClick}> Log Out </MenuItem> */}
         </Menu>
      </Sidebar>
      

    </div>
  );
}

export default AdminSidebar;
