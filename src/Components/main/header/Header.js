import './Header.scss'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="curved">
        <div className="textContent">

          <h1 className="headingText">AppCo</h1>

          <div className="title">
            <h1 className="headingText">Brainstorming for {' '} desired perfect Usability</h1>
          </div>

          <div>
            <h2 className="headingSmallText">Our design projects are fresh and simple and will benefit
              your business greatly. Learn more about our work!</h2>
          </div>

          <div>
            <Link to='/stats'>
              <button>View Stats</button>
            </Link>
          </div>
        </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fillOpacity="1"
                  d="M0,288L48,288C96,288,192,288,288,245.3C384,203,480,117,576,96C672,75,768,117,864,149.3C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </svg>

      </div>

        <div>
          <Logo/>
        </div>

      </div>
      );
      }

      export default Header;
