import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
    return (
        <>
            <li className="cards-item">
                <Link className="cards-item-link">
                    <figure className="cards-item-pic-wrap">
                        <img src="/" alt="Travel Img" className="cards-item-img" />
                    </figure>
                    <div className="cards-item-info">
                        <h5 className="cards-item-text"></h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
