import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function index({children}) {
  return (
    <div>
        <Header/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default index