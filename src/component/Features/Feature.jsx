import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({features}) => {
  return (
    <div>
         <p className='flex items-center mt-2 font-bold text-x'>
         <FaCircleCheck className='text-green-500 mr-2' />
         {features}
         </p>
    </div>
  );
};

export default Feature;