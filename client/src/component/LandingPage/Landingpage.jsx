import React from 'react';
import './LandingPage.css'
const LandingPage = () => {
    const handleExplore =()=>{
        window.location.href="https://youtube.com/playlist?list=PL_YiqYbfzwBAmiBVe07XF32XEcqx5usOA"
    }
    const handleExploreDaily =()=>{
        window.location.href="https://youtube.com/playlist?list=PL_YiqYbfzwBBTveHR_-CI1mWCK6dESiHp"
    }
  return (
    <div className="landing-page">
      <header className="headerpage">
        <h1 data-text="Welcome to ROM4U !" className='welcome-text'>Welcome to ROM4U !</h1>
        <p>Discover tools, Gaming roms, Flashing files</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Gaming Rom</h2>
          <img src="https://cdn.dribbble.com/users/1646023/screenshots/6625629/gamer_800x600.gif" alt="" />
          <p>There is advanced gaming rom collection for Your MIUI devices that is adaptive to play intense fight with zero lag</p>
          <button type='button' onClick={handleExplore}> Explore now</button>
        </div>
        <div className="feature">
          <h2>Battery Saver & Daily driver Rom</h2>
          <img src="https://i.pinimg.com/originals/c6/f4/85/c6f485b8548e70e4bbfe028a2a38e248.gif" alt="" />
          <p>For Your MIUI device there are also battery saver ROM that will extend your battery life</p>
          <button type='button' onClick={handleExplore}> Explore now</button>
        </div>
        <div className="feature">
          <h2>Most Wanted Rom</h2>
          <img src="https://www.appdev360.com/wp-content/uploads/2021/02/gif-app-development-on-android.gif" alt="" />
          <p>Now here are Most wanted ROM means these roms are capable for games, daily driver, battery saver </p>
          <button type='button' onClick={handleExploreDaily}>Explore now</button>
        </div>
      </section>
   
      <footer className="footer">
        <p>Contact us at: av95766@gmail.com</p>
      </footer>
    </div>
  );
};

export default LandingPage;
