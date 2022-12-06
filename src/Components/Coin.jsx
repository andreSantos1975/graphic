import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMoneyBillTrendUp, faSquareXmark } from '@fortawesome/free-solid-svg-icons'



const Coin = ({ coin, deleteCoin }) => {
      
    return (
        <Link to={`/coins/${coin.id}`} className='text-decoration-none my-1 coin'>
            <li className='coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text dark'>
                <img className='coinlist-image' src={coin.image} alt='' />
                <span className='text-decoration-none'>{coin.current_price}</span>
                <span className={coin.price_change_percentage_24h < 0
                    ? "text-danger mr-2"
                    : "text-success"
                }
                >
                    {""}
                    {coin.price_change_percentage_24h < 0 
                    ? ( <i><FontAwesomeIcon icon={faCaretDown} className='me-2' /></i>) 
                    : ( <i><FontAwesomeIcon icon={faMoneyBillTrendUp} className='me-2' /></i>)
                    }
                   
                    {coin.price_change_percentage_24h}
                    <i onClick={(e) => {
                      e.preventDefault()
                      deleteCoin(coin.id)
                    }}><FontAwesomeIcon className='delete-icon text-danger' icon={faSquareXmark} /></i>
                </span>
               
            </li>
        </Link>
    )
}

export default Coin
