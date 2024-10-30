import React from 'react';
import Feature from '../Features/Feature';

const PriceOption = ({option}) => {
  const {name,price,features} = option;
  return (
    <div className='bg-red-500 rounded-md p-4 flex flex-col text-white'>
        <h2 className='text-center font-extrabold'>
          <span className='md:text-4xl'>{price}</span>
          <span className='md:text-2xl'>/p</span>
        </h2>
        <h4 className='text-center font-extrabold'>{name}</h4>
        <div className='pl-6 flex-grow'>
        {
          features.map(features=><Feature features={features} ></Feature>)
        }
        </div>
        <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-800'>Buy Now</button>
    </div>
  );
};

export default PriceOption;