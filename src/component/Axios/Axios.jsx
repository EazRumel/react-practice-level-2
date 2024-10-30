import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Audio} from 'react-loader-spinner'
const Axios = ({phone}) => {
  const [phones,setPhones] = useState([])
  const [loadSpinner,setLoadSpinner] = useState(true)
  useEffect(()=>{
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      const phoneData =  data.data.data;
      const phoneFakeData = phoneData.map(phone => {
        const object = {
          name:phone.phone_name,
          price:parseInt(phone.slug.split('-')[1])
        }
        return object;
      })
      console.log(phoneFakeData)
      setPhones(phoneFakeData)
      setLoadSpinner(false)
    })
  },[])
  return (
    <div>
      
      {
        loadSpinner &&   <Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
  />
      }


       <h3 className='text-5xl text-center'>Phones:{phones.length}</h3>
       <BarChart width={1200} height={800} data={phones}>
        <Bar dataKey='price' fill="green"></Bar>
        <XAxis dataKey='name'></XAxis>
        <YAxis dataKey='price'></YAxis>
        <Tooltip></Tooltip>
       <Legend></Legend>
       <ResponsiveContainer></ResponsiveContainer>
       </BarChart>
    </div>
  );
};

export default Axios;