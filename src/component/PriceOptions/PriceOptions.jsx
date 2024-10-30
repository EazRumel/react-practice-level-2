import React from 'react';
import PriceOption from '../PriceOption/PriceOption';


const PriceOptions = () => {
  
   const  priceOptions = [
      {
        "id": 1,
        "name": "Basic Membership",
        "price": "40/month",
        "features": [
          "Gym Access (9 AM - 9 PM)",
          "Locker Room Access"
        ]
      },
      {
        "id": 2,
        "name": "Standard Membership",
        "price": "60/month",
        "features": [
          "24/7 Gym Access",
          "Locker Room Access",
          "Group Classes (4 sessions per month)"
        ]
      },
      {
        "id": 3,
        "name": "Premium Membership",
        "price": "100/month",
        "features": [
          "24/7 Gym Access",
          "Locker Room Access",
          "Unlimited Group Classes",
          "Sauna Access (4 sessions per month)",
          "Personal Training (2 sessions per month)"
        ]
      },
      {
        "id": 4,
        "name": "VIP Membership",
        "price": "150/month",
        "features": [
          "24/7 Gym Access",
          "Locker Room Access",
          "Unlimited Group Classes",
          "Unlimited Sauna Access",
          "Personal Training (4 sessions per month)",
          "Diet Consultation (2 sessions per month)",
          "Swimming Pool Access",
          "Yoga Classes (4 sessions per month)"
        ]
      }
    ]
  
  return (
    <div>
    <h3 className='md:font-bold text-5xl mt-5 mb-5'>Best Prices in the town</h3>
       <div className="md:grid grid-cols-4 gap-5 justify-center">
       {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
       </div>
    </div>
  );
};

export default PriceOptions;