import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const News = () => {
      // const [singleNews, setSingleNews] = useState([])
      const { id } = useParams()
      // useEffect(() => {
      //       fetch('/news.json')
      //             .then(res => res.json())
      //             .then(data => setSingleNews(data))
      // }, [])
      

      // const news = singleNews.find(news => news._id === id)
      // console.log(news);

      // const { title } = news;


      
      

      return (
            <div>
                  <Header />
                  <Navbar/>
                  <div className="grid md:grid-cols-4">
                        <div className='col-span-3'>
                              <h3 className="text-5xl my-5">News Details { singleNews.length } </h3>
                              {id}
                              {/* <h2>{ title }</h2> */}
                        </div>
                        <div><RightSideNav/></div>
                  </div>
            </div>
      );
};

export default News;