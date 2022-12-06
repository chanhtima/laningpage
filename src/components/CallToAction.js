import React from 'react'
import './CallToAction.css'
import { FiCode } from "react-icons/fi";

function CallToAction() {
  return (
    <div className='cta-bg'>
        <div className='overlay'></div>
        <div className='container'>
            <div className='cta-text'>
                <FiCode className='ficode'/>
                <h2>We're react dev team</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                </p>
                <a href='#' className='cta-btn'>get to know us</a>

            </div>
        </div>
      
    </div>
  )
}

export default CallToAction
