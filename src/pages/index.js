import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { useRef, useState, useEffect } from "react";

const Info = ({ title, description }) => {
  return (
    <>
      <div className={styles.info}>
        <strong>{title}</strong>
        {description}
      </div>
    </>
  );
};

const Carousel = () => {
  const swipeLeft = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const swipeRight = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const refs = useRef([]); // or an {}

  refs.current = []; // or an {}

  const [currentIndex, setCurrentIndex] = useState(1);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  let contentArray = [
    "We have purchased two hoists through Bbd. Matt was  great to work with and guided us in selecting the rightproducts for our needs. His knowledge was invaluable in makingthe decision on which hoist to purchase. Even after the hoistswere delivered, he assisted us with setting them up. Hisservice did not end with there. Every time we have had aquestion, Matt has promptly responded. We highly recommendPerfect Shores and Mat.",
    "content two",
    "content three",
  ];

  return (
    <div className={styles.carousel}>
      <img src="/arrowleft.svg" onClick={swipeLeft} />
      {[0, 1, 2, 3].map((val) => (
        <div
          key={val}
          ref={addToRefs}
          className={`${styles.carouselText} ${
            val == currentIndex ? "display-block" : "display-none"
          }`}
        >
          {contentArray[val]}
        </div>
      ))}
      <img src="/arrowright.svg" onClick={swipeRight} />
    </div>
  );
};

export default function Home() {
  const navItems = [
    "Home",
    "About Us",
    "Services",
    "Blog",
    "Contact Us",
    "Get Free Estimate",
  ];

  const DetailItem = ({text}) => {
    return (<div className={styles.detailItem}>
      <img src="/check.svg" />
      {text}
      </div>)
  }

  const arr1 = ["Interior Design Services", "Custom Designs", "House Plans", "Building Services"];
  const arr2 = ["General Contracting", "Engineering Services", "Architectural Services"];


  return (
    <>
      <div className={styles.header}>
        <img src="/bbd_logo.png" className={styles.logo} />
        <div className={styles.infoContainer}>
          <Info title="Our Location" description="Michigan ML 123" />
          <Info title="Contact Us" description="+019103828101012" />
        </div>
      </div>
      <div className={styles.nav}>
        <ul className={styles.navlist}>
          {navItems.map((item) => (
            <div>
              <li className={styles.navItem}>{item}</li>
              <div className={styles.btmLine}></div>
            </div>
          ))}
        </ul>
      </div>
      <div className={styles.firstSection}>
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>
              WELCOME TO THE 24/7 ONLINE BBD TRADE SHOW EXPO
            </h1>
            <span className={styles.subtitle}>
              AMERICA’S 1ST SOURCE FOR VALUED ENGINEERING!
              <br />
              SERVING ALL OF TRAVERSE CITY, MICHIGAN
            </span>
            <a href="#" className={styles.link}>
              CLICK HERE FOR TRADES24/7 ONLINE BBD TRADE SHOW EXPO
            </a>
            <div className={styles.buttons}>
              <button className={styles.btn}>
                Click Here For Architects And Building Designers
              </button>
              Click Here For Design Builders And General Contractors
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/background.png" className={styles.bg} />
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img src="/bbd_logo.png" className={styles.sLogo} />
      </div>
      <div className={styles.testimonials}>
        <h2>Testimonials</h2>
        <div className={styles.imgCircle}></div>
        <Carousel />
        <span className={styles.author}>Kyle.S</span>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsContent}>
          <div className={styles.items}>{arr1.map(item => <DetailItem text={item} />)}</div>
          <div className={styles.items}>{arr2.map(item => <DetailItem text={item} />)}</div>
        </div>
      </div>
      <div className={styles.contact}>
      BBD PROFESSIONALS INTERLOCHEN, MI 49643PHONE
      <div className={styles.phone}>(231) 216-0728</div>
      </div>
      <div className="footer"></div>
    </>
  );
}
