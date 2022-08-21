import React from 'react'
import {Link} from "react-router-dom"

function Navigation() {
  return (
    <div>
        <section className="title" >
        <h1>∾Todo App🍫∾</h1>
        <div className="underline"></div>
        </section>
        <div className="btn-container">
            <Link to="/" className="filter-btn">Home</Link>
            <Link to="/about" className="filter-btn">About</Link>
            <Link to="/create" className="filter-btn">Create</Link>
            <Link to="/create/posts" className="filter-btn">Todo</Link>
        </div>
    </div>
  )
}

export default Navigation