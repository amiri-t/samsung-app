import React from "react";
import "./galaxy.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import S22U from "../../components/assets/products/phones/p1.webp";
import S22P from "../../components/assets/products/phones/p2.jpg";
import S12U from "../../components/assets/products/phones/p3.webp";
import S21P from "../../components/assets/products/phones/p4.webp";
import N20u from "../../components/assets/products/phones/note.jpg";
import N20p from "../../components/assets/products/phones/note2.jpg";
import N10p from "../../components/assets/products/phones/note3.jpg";
import N10 from "../../components/assets/products/phones/note4.jpg";
import A1 from "../../components/assets/products/phones/a.jpg";
import A2 from "../../components/assets/products/phones/a1.jpg";
import A3 from "../../components/assets/products/phones/a2.jpg";
import A4 from "../../components/assets/products/phones/a3.jpg";
import F1 from "../../components/assets/products/phones/f1.jpg";
import F2 from "../../components/assets/products/phones/f2.jpg";
import F3 from "../../components/assets/products/phones/f3.webp";
import F4 from "../../components/assets/products/phones/f4.jpg";
import { BsFillBagPlusFill } from "react-icons/bs";

const Galaxy = () => {
  return (
    <div className="galaxy">
      <Navbar li="activeT" />
      <div className="container">
        <div className="sidebar-container">
          <Sidebar className="sidebar" />
        </div>
        <div className="products">
          <h1>GALAXY</h1>
          <div className="s-series">
            <h4>S-SERIES</h4>
            <div className="shop-items">
              <div className="shop-item">
                <img src={S22U} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy S22 Ultra 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,490.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={S22P} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy S22+ 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,230.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={S12U} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy S21 Ultra 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,390.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={S21P} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy S20 Ultra 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,090.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* note series */}
          <div className="note-series">
            <h4>NOTE-SERIES</h4>
            <div className="shop-items">
              <div className="shop-item">
                <img src={N20u} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy Note20 Ultra 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,290.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={N20p} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy Note20+ 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,130.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={N10p} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy Note10+ 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$690.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={N10} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy Note10 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">590.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* A series */}
          <div className="a-series">
            <h4>A-SERIES</h4>
            <div className="shop-items">
              <div className="shop-item">
                <img src={A1} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy A32+ 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$290.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={A2} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy A73 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$430.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={A4} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy A33 5G</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$240.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={A3} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy A12</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$190.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* other ones */}
          <div className="a-series">
            <h4>OTHER-SERIES</h4>
            <div className="shop-items">
              <div className="shop-item">
                <img src={F1} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy Z Fold 3</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,790.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={F2} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy Z Flip 3</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,830.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={F3} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy Z Fold 2</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,540.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
              <div className="shop-item">
                <img src={F4} className="shop-item-img" alt="" />
                <span className="shop-item-title">Galaxy Z Flip 2</span>
                <div className="shop-item-details">
                  <span className="shop-item-price">$1,690.30</span>
                  <button className="btn shop-item-btn">
                    <BsFillBagPlusFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galaxy;
