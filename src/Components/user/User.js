import Header from '../stats/header/Header'
import Footer from '../stats/footer/Footer'
import NavUser from './nav/NavUser'
import UserTitle from './title/UserTitle'
// import { Basic } from 'react-chartjs-2'
import { useParams } from 'react-router-dom'


function User() {
  const params = useParams()

  return(
    <>
      <Header/>
      <Footer/>
      <NavUser/>
      <UserTitle/>
    </>
  )
}

export default User
