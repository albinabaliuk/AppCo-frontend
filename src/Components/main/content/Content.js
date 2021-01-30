import './Content.scss'
import Widgets from './Widgets'

function Content() {

  return(
    <>
      <div className="firstTitle">
        <h1 className="contentTitle">Why small business owners love AppCO?</h1>
      </div>
      <div className="secondTitle">
        <h4 className="contentSmallTitle">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</h4>
      </div>
      <Widgets/>
    </>
  )
}

export default Content
