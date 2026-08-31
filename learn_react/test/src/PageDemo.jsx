import React from 'react'
import {Link} from 'react-router-dom'

const PageDemo = () => {
  return (
    <div>
        <nav>
            <Link to='/Home'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Details'>Details</Link>
        </nav>

    </div>
  )
}

export default PageDemo