import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar'
import LeftSideNav from './../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BrakingNews from './BrakingNews';

const Home = () => {
      return (
            <div>
                  <Header />
                  <BrakingNews/>
                  <Navbar/>
                  <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        <div className='border'><LeftSideNav/></div>
                        <div className='md:col-span-2 border'>
                              <h3 className="text-3xl">this is main container</h3>
                        </div>
                        <div><RightSideNav/></div>
                  </div>
            </div>
      );
};

export default Home;