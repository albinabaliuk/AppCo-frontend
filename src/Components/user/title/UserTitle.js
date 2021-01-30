import './UserTitle.scss'
import { connect } from 'react-redux'

function UserTitle (props) {
  const userName = props.user.first_name + ' ' + props.user.last_name

  return(
    <div className="statTitle">
      <h1>{userName}</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.userStatistics.selectedUser
})

const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(UserTitle)
