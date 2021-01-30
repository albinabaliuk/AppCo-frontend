import { connect } from 'react-redux'
import ArrowIcon from '../../../assets/icons/arrow.svg'
import './Table.scss'
import * as Actions from '../../../state/actions/userStatistics'
import { useHistory} from 'react-router-dom'

function Table (props) {
  const history = useHistory()

  const renderData = () => {
    return props.data.map((item) => {
      return (
        <>
          <div onClick={() => {
            props.selectUser(item)
            history.push(`/user/${item.id}`)
          }}>{item.id}</div>

          <div onClick={() => {
            props.selectUser(item)
            history.push(`/user/${item.id}`)
          }}>{item.first_name}</div>

          <div onClick={() => {
            props.selectUser(item)
            history.push(`/user/${item.id}`)
          }}>{item.last_name}</div>

          <div onClick={() => {
            props.selectUser(item)
            history.push(`/user/${item.id}`)
          }}>{item.email}</div>

          <div onClick={() => {
            props.selectUser(item)
            history.push(`/user/${item.id}`)
          }}>{item.gender}</div>

          <div onClick={() => {
            props.selectUser(item)
            history.push(`/user/${item.id}`)
          }}>{item.ip_address}</div>

          <div onClick={() => {
            props.selectUser(item)
            history.push(`/user/${item.id}`)
          }}>{item.total_clicks}</div>

          <div onClick={() => {
            props.selectUser(item)
            history.push(`/user/${item.id}`)
          }}>{item.total_page_views}</div>
        </>
      )
    })
  }

  const renderTableHeader = () => {
    return (
      <>
        <div>ID</div>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Email</div>
        <div>Gender</div>
        <div>IP Address</div>
        <div>Total Clicks</div>
        <div>Total Page Views</div>
      </>
    )
  }

  const onArrowLeftClick = () => {
    if (props.page === 1) {
      return
    }

    props.fetchUsersStatistics(props.limit, props.page - 1)
  }

  const onArrowRightClick = () => {
    props.fetchUsersStatistics(props.limit, props.page + 1)
  }

  const onPageButtonClick = page => () => {
    props.fetchUsersStatistics(props.limit, page)
  }

  const renderPagesButtons = () => {
    const elements = []

    for(let i = 0; i < 5; i++) {
      const className = i === 0 ? 'pageButton activePageButton' : 'pageButton'
      const page = props.page + i

      elements.push(<div className={className} key={i} onClick={onPageButtonClick(page)}>{page}</div>)
    }

    return elements
  }

  return(
    <>
      <div className="userStatisticsTable">
        {renderTableHeader()}
        {renderData()}
      </div>

      <div className='paginationWrapper'>
        <img className='arrowLeft' src={ArrowIcon} onClick={onArrowLeftClick} />
        {renderPagesButtons()}
        <img className='arrowRight' src={ArrowIcon} onClick={onArrowRightClick} />
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  limit: state.userStatistics.limit,
  page: state.userStatistics.page,
  data: state.userStatistics.data
})

const mapDispatchToProps = dispatch => ({
  fetchUsersStatistics: (limit, page) => dispatch(Actions.requestUsersStatistics(limit, page)),
  selectUser: (user) => dispatch(Actions.selectUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)
