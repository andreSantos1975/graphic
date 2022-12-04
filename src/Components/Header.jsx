import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Header = () => {
  return (
    <div className='teste'>
      <h1 className='text-center text-light mt-3 mb-4'>InvestChain</h1>
      <Breadcrumb>
      <Breadcrumb.Item href='/'><a className='text-light'>Home</a></Breadcrumb.Item>
      <Breadcrumb.Item href='#'><a className='text-light'>List Coins</a></Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    </div>
  )
}

export default Header
