import React, { useEffect } from 'react'
import Header from './header/Header'
import Nav from './navigation/Nav'
import { connect } from 'react-redux'
import * as Actions from '../../state/actions/userStatistics'
import Title from './table/Title'
import Table from './table/Table'
import Footer from './footer/Footer'

function Stats(props) {
  useEffect(() => {
    props.fetchUsersStatistics(props.limit, props.page)
  }, [])

  return (
    <>
      <Header/>
      <Nav/>
      <Title/>
      <Table />
      <Footer />
    </>
  )
}

const mapStateToProps = state => ({
  limit: state.userStatistics.limit,
  page: state.userStatistics.page
})

const mapDispatchToProps = dispatch => ({
  fetchUsersStatistics: (limit, page) => dispatch(Actions.requestUsersStatistics(limit, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
