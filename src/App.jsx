import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [youtubeId, setYoutubeId] = useState(['nfuLwHCUrcA']);
  

  return (

    <div className='main'>

      <h1 style={{textAlign: "center", fontFamily: "fantasy",  background: "white", padding: "20px"}}>Minimalist Video Player</h1>

      <br />

      

      <h2 style={{textAlign: "center", fontFamily: "sans-serif", color: "white"}}>Brought to you by Alfred Marshall Dsouza</h2>

      <button className="btn" onClick={function(){

        setYoutubeId('nfuLwHCUrcA')
      }}>1 - Oh Jaana</button>

      <button className="btn" onClick={function(){

        setYoutubeId('1DGNn0GslLQ')
      }}>2 - Kya Mujhe Pyaar Hai</button>


      <button className="btn" onClick={function(){

        setYoutubeId('rTuxUAuJRyY')
      }}>3 - Tera Hone Laga Hoon</button>

      <button className="btn" onClick={function(){

        setYoutubeId('P8PWN1OmZOA')
      }}>4 - Tu Jaane Na</button>

      <button className="btn" onClick={function(){

        setYoutubeId('eK5gPcFjQps')
      }}>5 - Aadat Unplugged</button>



      <button className="btn" onClick={function(){

        setYoutubeId('Hh66AZ9QagQ')
      }}>6 - Judaa Hoke Bhi</button>

      <button className="btn" onClick={function(){

        setYoutubeId('0J0HZrDvbjY')
      }}>7 - Tera Mera Rishta Purana</button>

      <button className="btn" onClick={function(){

        setYoutubeId('xR-LnKJGxwM')
      }}>8 - Mahiya Remix</button>



      <button className="btn" onClick={function(){

        setYoutubeId('vIaH35-MLsk')
      }}>9 - Right Now</button>



      <br />

      <br />
      <br />

    

      <VideoComponent youtubeId={youtubeId}></VideoComponent>

      <br />

      <br />

      <Footer></Footer>
    </div>
    
  )
}


function VideoComponent({youtubeId}){

 

  return <div style={{alignContent: "center"}}>

<iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
        src={`https://youtube.com/embed/${youtubeId}?autoplay=1`}>
</iframe>
  </div>
}

function Footer(){

  return <div className='footer'>

    <h1 className='fh1'>Music.... Melody.... Madhoshi....</h1>

    <br />
    
  </div>
}

export default App
