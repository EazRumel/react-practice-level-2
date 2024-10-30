import React from 'react';
import PropTypes from 'prop-types'; 

const Links = ({route}) => {
  return (
    <div className='flex mx-auto'>
      <li className="">
            <a href={route.url}>{route.name}</a>
          </li>
    </div>
  );
};
Links.PropTypes = {
  route:PropTypes.object
}

export default Links;