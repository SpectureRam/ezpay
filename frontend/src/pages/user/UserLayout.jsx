import React from 'react'
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const UserLayout =({children})=> {
  return (
    <div className=''>
        <header className='' >
            <Navbar/>
        </header>  
        <main className=''>
            {children}
         </main>  
         <footer className=''>
            <Footer/>
        </footer> 
    </div>
  )
}

UserLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default UserLayout