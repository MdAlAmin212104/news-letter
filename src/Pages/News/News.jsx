import React from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const News = () => {
      const { id } = useParams()
      
      

      return (
            <div>
                  <Header />
                  <Navbar/>
                  <div className="grid md:grid-cols-4">
                        <div className='col-span-3'>
                              <h3 className="text-5xl my-5">News Details </h3>
                              {id}
                        </div>
                        <div><RightSideNav/></div>
                  </div>
            </div>
      );
};

export default News;