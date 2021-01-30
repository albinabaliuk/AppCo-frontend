import logo1 from '../../../assets/icons/Group 13.png'
import logo2 from '../../../assets/icons/Group 14.png'
import logo3 from '../../../assets/icons/Group 15.png'
import './Content.scss'


function Widgets() {
  const widget = [
    {image: logo1, title: "Clean Design", subtitle: "Increase sales, by showing true dynamics of your website"},
    {image: logo2, title: "Secure Data", subtitle: "Build your online store's trust using Social Proof & Urgency"},
    {image: logo3, title: "Retina Ready", subtitle: "Realize importance of social proof in customer's purchase decision"}
  ]

  const widgetItem =  widget.map(item => <div key={item.title} className="widget"><img src={item.image} />
  <h1>{item.title}</h1><h2>{item.subtitle}</h2></div>)


  return(
    <div className="container">
      {widgetItem}
    </div>
  )
}

export default Widgets
