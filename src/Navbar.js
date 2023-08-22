import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>Assessment Form</div>
        <ul className='nav-links'>
            <li>
                <a>Application Info</a>
            </li>
            <li>
                <a>Assessment Benchmarks and Information Request</a>
            </li>
            <li>
                <a>Conditions</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
