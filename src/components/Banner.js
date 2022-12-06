import React from 'react'
import "./Banner.css"

function Banner() {
    let bannerDate = {
        title:"React landing page",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        
    }
  return (
    <div className="banner-bg">
        <div className="container">
            <div className="banner-con">
                <div className="banner-text">
                    <h1>{ bannerDate.title}</h1>
                    <p>
                        {bannerDate.desc}
                    </p>
                    <a href="#" className="banner-btn"> leam More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
