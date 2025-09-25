import React from 'react'
import './Navbar.css'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"})
        break
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"})
        break
      }
      case "inr": {
        setCurrency({name: "inr", symbol: "₹"})
        break
      }
      default : {
        setCurrency({name: "usd", symbol: "$"})
        break
      }
    }
  }


  return (
    <div className='navbar'>
      <Link to={'/'}>
       <h1>B-CRYPT</h1>
       </Link>
      
       <div className='nav-right'>
           <select onChange={currencyHandler}>
           <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
           </select>
       </div>
    </div>
  )
}

export default Navbar