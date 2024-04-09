import React from 'react'

export default function Search() {
  return (
    <div>
        <div className="itemsnumber"></div>
        <div className="sortingcontent">
            <div className="price">
                <div className="lowtohigh"></div>
                <div className="hightolow"></div>
                <div className="popularity"></div>
            </div>
        </div>
        <div className="maincontent">
            <div className="items"></div>
        </div>
        <div className="filterscontent">
            <div className="pricerange"></div>
            <div className="color"></div>
            <div className="availability"></div>
            <div className="discounts"></div>
            <div className="newarrivels"></div>
        </div>
        <div className="pages"></div>
    </div>
  )
}
