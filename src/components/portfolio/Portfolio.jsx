import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio2.jpg'
import img2 from '../../assets/portfolio3.jpg'
import img3 from '../../assets/portfolio4.jpg'
import img4 from '../../assets/portfolio5.png'
import img5 from '../../assets/portfolio6.jpg'

const data=[
    {
        id:1,
        image:img1,
        title:"eisejdk",
        Github:'https://github.com',
        demo:'eiser.tk'
    },
    {
        id:2,
        image:img2,
        title:"eisejdk2",
        Github:'https://github.com',
        demo:'eiser.tk'
    },
    {
        id:3,
        image:img3,
        title:"eisejdk",
        Github:'https://github.com',
        demo:'eiser.tk'
    },
    {
        id:4,
        image:img4,
        title:"eisejdk",
        Github:'https://github.com',
        demo:'eiser.tk'
    },
    {
        id:5,
        image:img5,
        title:"eisejdk",
        Github:'https://github.com',
        demo:'eiser.tk'
    },
    {
        id:6,
        image:img1,
        title:"eisejdk",
        Github:'https://github.com',
        demo:'eiser.tk'
    }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
            {
                data.map(({id,image,title,Github,demo})=>{
                    return(
            <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                <a href={Github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
            </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Portfolio