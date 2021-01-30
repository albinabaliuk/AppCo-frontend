import './Footer.scss'

function Footer() {

  return(
    <>
    <div className="main">
      <div className="form-group">
        <input className="form-field" type="text" placeholder="Enter your email" />
        <span>Subscribe</span>
      </div>
    </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#255D8B" fillOpacity="1"
              d="M0,128L34.3,133.3C68.6,139,137,149,206,170.7C274.3,192,343,224,411,213.3C480,
              203,549,149,617,122.7C685.7,96,754,96,823,96C891.4,96,960,96,1029,117.3C1097.1,139,
              1166,181,1234,181.3C1302.9,181,1371,139,1406,117.3L1440,96L1440,320L1405.7,
              320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,
              320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,
              320L0,320Z"></path>
      </svg>

      <div className="footer"></div>
    </>
    )
};

export default Footer
