import React from 'react';
import PropTypes from 'prop-types'; 

const Links = ({route}) => {
  return (
    <div className='flex mx-auto md:p-5'>
      <li className="mx-5 hover:bg-blue-400 rounded-lg">
            <a href={route.url}>{route.name}</a>
          </li>
    </div>
  );
};
Links.propTypes = {
  route:PropTypes.object
}

export default Links;