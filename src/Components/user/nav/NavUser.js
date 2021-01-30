import './NavUser.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function NavUser(props) {
  const userName = props.user.first_name + ' ' + props.user.last_name

  return (
    <div className="navUser">
      <div className="navUserMain">
        <Link className="a" to='/main'> Main Page ></Link>
      </div>
      <div className="navUserStats">
        <Link className="a" to='/stats'>User statistic ></Link>
      </div>
      <div className="navUserUser">
        <Link className="a" to={`/user/${props.user.id}`}>{userName}</Link>
      </div>
    </div>
  )

}

const mapStateToProps = state => ({
  user: state.userStatistics.selectedUser
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps())(NavUser)
