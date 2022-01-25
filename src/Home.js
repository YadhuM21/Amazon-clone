import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg"
          className="home_image"
          alt=""
        />
        <div className="home_row">
          <Product
            id="2292001"
            title="Amazon Brand - Eono USB PC Gaming Headset - Surround Sound with Noise canceling Boom mic, Stereo Sound Over Ear Headphones "
            price={2000}
            image="https://m.media-amazon.com/images/I/71Fe6J6FNpL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="2292002"
            title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
            price={3799}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
            rating={4}
          />
          <Product
            id="2292008"
            title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Pitch Black)"
            price={7990}
            image="https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="2292009"
            title="OnePlus Bullets Wireless Z Bass Edition (Reverb Red)"
            price={2190}
            image="https://m.media-amazon.com/images/I/61DKcGr12OL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="2292003"
            title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
            price={29999}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Gsj-Q-zOS.jpg"
            rating={4}
          />
          <Product
            id="2292004"
            title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
            price={349}
            image="https://images-eu.ssl-images-amazon.com/images/I/31IdiM9ZM8L.jpg"
            rating={4}
          />
          <Product
            id="2292005"
            title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
            price={649}
            image="https://m.media-amazon.com/images/I/61wKeo-Ri0L._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          
        </div>
        <div className="home_row">
          <Product
            id="2292006"
            title="HP 15 (2021) AMD Ryzen 3-3250 8 GB RAM, 1TB HDD + 256GB SSD, 15.6 inches FHD Screen, Windows 10, MS Office Thin & Light Laptop, 1.82kg (15s-gr0012AU)
            by HP"
            price={43499}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Z5NEsKo9L.jpg"
            rating={4}
          />
          <Product
            id="2292007"
            title="Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV UA32TE40AAKBXL (Titan Gray) (2020 Model)"
            price={18490}
            image="https://m.media-amazon.com/images/I/81N8UlFd0kL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
    )
}

export default Home
