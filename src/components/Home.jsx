import react from "react";
import {Link} from "react-router-dom";

function Home(){
    return (

        <div>
          <header>
            <div className="header">
              <div className="logo-container">
                <a href="/"><img src="/img/NTA_logo.png" alt="Quiz Website" /></a>
              </div>
              <div className="nav-container">
                <ul>
                <li>  <Link to="/">Home</Link></li>
              
                  <li>  <Link to="/login">Login</Link></li>
                  
                  <li><a href="#">Help(FAQs)</a></li>
                </ul>
              </div>
            </div>
          </header>
          <hr />
          <div className="landing-container">
            <div className="promo-img-vid">
              {/* <img src="/img/promo.png" alt="Promotional Image"> */}
              <iframe width={880} height={492} src="https://www.youtube.com/embed/6GHMRbdQJG8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="right-side-para-container">
              <h3 className="big-heading">Most Loved Quiz Website For All coders</h3>
              <p>Here we provide quizzes for all the languages like c/c++,java,python,javascript,and many more. We are providing a huge content for free and providing the best content is our only goal. We also Provide you All The <strong>Interview Questions</strong> From The Big Tech Giants like <strong><i>FAANG</i></strong>.</p>
            </div>
          </div>  
          <div className="about-us">
            <div className="procedure">
              <div className="step-1">
              </div>
            </div>
          </div>
          <div className="loginH">
            <h3>Check Your Skills | Login To Account &amp; Take the Test</h3>
            <button type="button" className="btn btn-primary btn-lg"><a href="/login.html">Login Now </a></button>
          </div>
          <footer>
            {/* -----------add footer Here using ejs file------------ */}
            {/* -------------Already Present in Quiz page -----------  */}
          </footer>
        </div>
      );
    
}


export default Home;