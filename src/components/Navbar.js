import React from 'react'

const Navbar = () => {
  return (
    <div class='nav-container'>
      <nav>
        <div className='logo'>Planner</div>
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
