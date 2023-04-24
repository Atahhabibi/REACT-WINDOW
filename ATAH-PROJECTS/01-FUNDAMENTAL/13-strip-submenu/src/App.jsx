import sublinks from './data'
import Navbar from './Navbar'
import phoneImg from './assets/images/phone.svg'


function App() {


  return <main className='main'>

        <Navbar sublinks={sublinks} />

    <div className="section-center info-center">

        <div className="info-container">

           <h3 className='main-title'>Payments <br/>infrastructure <br/> for the internet</h3>
           <p className='info'>
             Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s 
             software and APIs to accept payments, send payouts, and manage their businesses 
             online.
            </p>
           <button className='start-now-btn'>start now</button>

        </div>

        <img src={phoneImg} className="phone-img"  alt="phone image" />

    </div>

  </main>
}

export default App
