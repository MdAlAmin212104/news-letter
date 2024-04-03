import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
      const [categories, setCategories] = useState([])

      useEffect(() => {
            fetch('categories.json')
                  .then(res => res.json())
                  .then(data => setCategories(data))
      },[])
      return (
            <div className='space-y-6'>
                  <h1 className="text-xl">Categories News {categories.length}</h1>
                  {
                        categories.map(category => <Link  
                              key={category.id}
                              to={`/category/${category.id}`}
                              className='block ml-4 text-xl font-semibold px-4'
                              >{category.name}
                        </Link>)
                  }
            </div>
      );
};

export default LeftSideNav;