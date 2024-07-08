import React from 'react'

const App = () => {
  return (
    <>
      <nav>
        <div>
          <img src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg" alt="" />
        </div>
        <div className='nav2'>
          <div id='drop1' className='navv'>
            <a href="#">About</a>
            <i class="fa-solid fa-chevron-down"></i>

            <div className='dropdown1'>
              <a href="#">Our Story</a>
              <a href="#">Our Team</a>
              <a href="#">Campus Info</a>
            </div>
          </div>
          <div className='navv'>
            <a href="#">Programs</a>
            <i class="fa-solid fa-chevron-down"></i>

          </div> 

          <div className='navv'>
            <a href="#">Admissions</a>
            <i class="fa-solid fa-chevron-down"></i>

          </div>
          <div className='navv'>
            <a href="#">E-portal</a>
            <i class="fa-solid fa-chevron-down"></i>

          </div>
          <div>
            <a href="#">SQI scholarships</a>
          </div>
          <div>
            <a href="#">News</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App