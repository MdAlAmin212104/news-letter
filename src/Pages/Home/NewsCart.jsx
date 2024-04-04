import React from 'react';
import { Link } from 'react-router-dom';

const NewsCart = ({news}) => {

      const { _id, title, image_url, details } = news;
      //console.log(title, thumbnail_url,);
      return (
            <div>
                  <div className="card bg-base-100 shadow-xl">
                  <figure><img src={image_url} alt="Shoes" /></figure>
                  <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                        {
                                    details.length > 200 ?
                                          <p>{details.slice(0, 200)} <Link
                                                to= {`news/${_id}`}
                                                className='text-blue-800 font-bold'>Read More ...</Link></p>
                                          : <p>{ details }</p>
                        }
                  <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                  </div>
                  </div>
                  </div>
                                    
            </div>
      );
};

export default NewsCart;