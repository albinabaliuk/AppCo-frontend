import './Nav.scss'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav">
      <div className="navMain">
        <Link className="a" to='/main'> Main Page ></Link>
      </div>
      <div className="navStats">
        <Link className="a" to='/stats'>User statistic</Link>
      </div>
    </div>
  )

}

export default Nav
