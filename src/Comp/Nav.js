import React from 'react'
import Add from './Add';
import Search from './Search';
const Nav = () => {


  return (
  <>
  <div className='header'>

<nav>
        <ul>
            <li> <a href='Popular'> Home</a></li>
            <li> <a href='Drama'> Drama</a></li>
            <li> <a href='Action'> Action</a></li>
            <li> <a href="Comedy"> Comedy</a></li>
        </ul>
    </nav>
   <Add />
   <Search />
</div>

  </>
  )
}

export default Nav