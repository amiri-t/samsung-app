import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeroImg from "../../components/assets/heroImg.jpg";
import Sidebar from "../../components/sidebar/Sidebar";
import CameraIMg from "../../components/assets/camera-specs.jpg";
import ProcessorImg from "../../components/assets/processorimg2.gif";
import Black from "../../components/assets/colors/black.webp";
import Gold from "../../components/assets/colors/gold.webp";
import White from "../../components/assets/colors/white.webp";
import Green from "../../components/assets/colors/green.webp";
import Durability from "../../components/assets/durability.png";
import Durability2 from "../../components/assets/durability2.png";
import waterproof from "../../components/assets/waterproof.jpg";
import display from "../../components/assets/screen.webp";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <Navbar />
        <div className="container">
          <div className="sidebar-container">
            <Sidebar className="sidebar" />
          </div>
          <div className="details">
            <h2 className="headerTitle">
              SAMSUNG <br /> <span className="phoneModel">GALAXY S22+</span>
            </h2>
            <h3>
              The new Galaxy S22+ is a Game-changer! The best + series is here.
              Reasonable price and Amazing Quality Design, Preformance and much
              more...
            </h3>
            <button>Order Now</button>
          </div>
          <div className="img">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>

      <div className="camera-section">
        <div className="IMG">
          <img src={CameraIMg} alt="" />
        </div>
        <div className="desc">
          <h3>THE BEST TRIPLE CAMERA DESIGN WITH 3 DIFFERENT LENS</h3>
        </div>
      </div>

      <div className="feature">
        <h1>Faster. Stronger. For Longer</h1>
      </div>

      <div className="processor">
        <h1>THE FASTEST PROCESSOR YOU CAN GET ON A SMARTPHONE TODAY</h1>
        <img src={ProcessorImg} alt="" />
      </div>

      <div className="imageGallery">
        <div className="topp">
          <div className="left">
            <h5>COLORS</h5>
            <h1>Throwing shade at conventional colors</h1>
          </div>
          <div className="right">
            <h3>
              Striking Phantom White, knock-out Green, soft Pink Gold or classic
              Phantom Black — the choice isn't easy, but you can't go wrong.
            </h3>
            <div className="options">
              {}
              <div className="option">
                <div className="white" onClick={White}></div>
                <div className="color">White</div>
              </div>
              <div className="option">
                <div className="black"></div>
                <div className="color">Black</div>
              </div>
              <div className="option">
                <div className="pinkgold"></div>
                <div className="color">PinkGold</div>
              </div>
              <div className="option">
                <div className="green"></div>
                <div className="color">Green</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomF">
          <div className="img-container">
            <img src={White} alt="" />
            <img src={Black} alt="" />
            <img src={Gold} alt="" />
            <img src={Green} alt="" />
          </div>
        </div>
      </div>

      <div className="durability">
        <div className="top">
          <h5>DURABILITY</h5>
          <h2>A tough act to follow</h2>
        </div>
        <div className="center">
          <div className="top-imgs">
            <img src={Durability} alt="" />
            <img src={Durability2} alt="" />
          </div>
          <div className="bottom-img">
            <img src={waterproof} alt="" />
          </div>
        </div>
        <div className="bottomF">
          <div className="text">
            Worry less as you pick up a fallen phone with Corning Gorilla Glass
            Victus+ on the screen and back panels. The phone is surrounded by a
            polished, protective Armor Aluminum frame, and with its IP68 water
            resistance rating, it can take a splash, too.
          </div>
          <div className="features">
            <p>
              <span>01</span>Corning Gorilla Glass Victus+
            </p>
            <p>
              <span>02</span>Armor Aluminium Frame
            </p>
            <p>
              <span>03</span>IP68 Water Resistances
            </p>
          </div>
        </div>
      </div>

      <div className="display">
        <div className="img">
          <img src={display} alt="" />
        </div>
        <div className="text">
          <div className="top-features">
            <h1 className="title">
              S22 Series have the best display that you can get on any
              smartphone today.
            </h1>
          </div>
          <div className="bottom-features">
            <p>120Hz Refresh Rate</p>
            <p>240Hz PMW</p>
            <p>8K Display</p>
            <p>Dynamic AMOLED 2X</p>
            <p>1750 nits Brightness</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
