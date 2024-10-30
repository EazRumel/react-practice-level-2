import './App.css'
import Navbar from './component/Navbar/Navbar'
import PriceOptions from './component/PriceOptions/PriceOptions'
import LineChart from './component/Linechart/Linechart'
import Axios from './component/Axios/Axios'


function App() {


  return (
    <> 
      <h1 className='text-3xl'>My practice level-2</h1>
      <Navbar></Navbar>   
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Axios></Axios>
    </>
  )
}

export default App
