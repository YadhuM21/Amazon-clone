import React from "react";
import "./Home.css";
import Product from "./Product";
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
            title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
            price={29999}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Gsj-Q-zOS.jpg"
            rating={4}
          />
          <Product
            title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
            price={349}
            image="https://images-eu.ssl-images-amazon.com/images/I/31IdiM9ZM8L.jpg"
            rating={4}
          />
          <Product
            title="Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi+LTE,Oxford Grey"
            price={29499}
            image="https://m.media-amazon.com/images/I/712YC1bGhJL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="HP 15 (2021) AMD Ryzen 3-3250 8 GB RAM, 1TB HDD + 256GB SSD, 15.6 inches FHD Screen, Windows 10, MS Office Thin & Light Laptop, 1.82kg (15s-gr0012AU)
            by HP"
            price={43,499}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Z5NEsKo9L.jpg"
            rating={4}
          />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
