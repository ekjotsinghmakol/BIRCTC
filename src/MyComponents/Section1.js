import React from "react";
import "./Section1.css"
import Navbar from "./Navbar";
import Footer from "./Footer";


const myStyle={
  backgroundImage: "url(https://c1.wallpaperflare.com/preview/720/904/36/train-viaduct-mountain-nature.jpg)",
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  
};
function Home() {
  return (
    <>
      <Navbar />
      <div style={myStyle} className='container-fluid' id='div1'></div>
      <div className='container-fluid' id='div2'>
      <br />
      
      <section className="page-contain">
  
  <a href="/" className="data-card">
    <img className='img-01' src="data:image/jpeg;base64,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" alt="" />
    <h4>Nearest Hospitals</h4>
    <p>Is there an emergency ? Don't worry we got you covered.</p>
    <span class="link-text">
      View Information
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
</svg>
    </span>
  </a>
  <a href="/" className="data-card">
    <img className='img-01' src="data:image/jpeg;base64,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" alt="" />
    <h4>Nearest Grocery Stores</h4>
    <p>Short on essential supplies ? Hop in!</p>
    <span class="link-text">
      View Information
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
</svg>
    </span>
  </a>
  <a href="/" className="data-card">
    <img className='img-01' src="data:image/jpeg;base64,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" alt="" />
    <h4>Nearest Restaurants</h4>
    <p>Feeling hungry ? Let's find out the best place for you</p>
    <span class="link-text">
      View Information
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
</svg>
    </span>
  </a>
  
  
</section>
    </div>
    <Footer/>
              
      
      <script type="text/javascript" src="main.js"></script>
    </>
  );
}

export default Home;
