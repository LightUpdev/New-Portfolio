import React from 'react'

const Footer = ({ backUp }) => {
  return (
    <div className='footer'>
        <div className="goto-top" href='#top' onClick={()=>backUp()}>
            <div className="fa fa-caret-up footer-icon"></div>
        </div>
    </div>
  )
}

export default Footer