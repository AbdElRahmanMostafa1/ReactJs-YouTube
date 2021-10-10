import React from 'react';
import './WaitingSearch.css'

const WaitingSearch = ({children}) => {
  return (
    <section className='waiting-search'>
      <h1 className='message'>Message</h1>
      <p className='text'>
        {children}
      </p>
    </section>
  )
}

export default WaitingSearch
