import React from 'react'
import {Link} from "react-router-dom"

function Navigation() {
  return (
    <div>
        <section className="title" >
        <h1>∾Chocolate∾</h1>
        <div className="underline"></div>
        </section>
        <div className="btn-container">
            <Link to="/" className="filter-btn">Home</Link>
            <Link to="/about" className="filter-btn">About</Link>
            <Link to="/create" className="filter-btn">Share</Link>
            <Link to="/create/posts" className="filter-btn">Moments</Link>
        </div>
    </div>
  )
}

export default Navigation