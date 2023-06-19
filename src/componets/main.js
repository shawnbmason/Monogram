import "../styles/main.css";
// import NavBar from "../componets/navbar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const picOne = {
  position: "relative",
  cursor: "pointer",
  backgroundSize: "450px, 300px",
  width: "450px",
  height: "300px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-final_1080x720_crop_center.jpg.webp?v=1660013247")`
};

const altOne = {
  position: "relative",
  cursor: "pointer",
  backgroundSize: "450px, 300px",
  width: "450px",
  height: "300px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_1366x911_crop_center.jpg.webp?v=1668446709")`
};

const picTwo = {
  position: "relative",
  zIndex: "1",
  cursor: "pointer",
  backgroundSize: "450px, 300px",
  width: "450px",
  height: "300px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_1080x720_crop_center.jpg.webp?v=1623682377")`
};

const altTwo = {
  position: "relative",
  zIndex: "1",
  cursor: "pointer",
  backgroundSize: "450px, 300px",
  width: "450px",
  height: "300px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_1366x911_crop_center.jpg.webp?v=1668433146")`
};

const picThree = {
  position: "relative",
  cursor: "pointer",
  backgroundSize: "450px, 300px",
  width: "450px",
  height: "300px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_1080x720_crop_center.jpg.webp?v=1623269261")`
};

const altThree = {
  position: "relative",
  cursor: "pointer",
  backgroundSize: "450px, 300px",
  width: "450px",
  height: "300px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_StudioBracket1_Monogram_May2020_4558_53685b21-b09f-45b0-85a2-180d6acfafac_1366x911_crop_center.jpg.webp?v=1668433210")`
};

const picFour = {
  position: "relative",
  cursor: "pointer",
  backgroundSize: "450px, 300px",
  width: "450px",
  height: "300px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_MasterClosedBracket1_Monogram_May20204494_1080x720_crop_center.jpg.webp?v=1623682600")`
};

const altFour = {
  position: "relative",
  cursor: "pointer",
  backgroundSize: "450px, 300px",
  width: "450px",
  height: "300px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_MasterBracket1_Monogram_May2020_4555_1366x911_crop_center.jpg.webp?v=1668433240")`
};

const picFive = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/20221018_MonogramCC_Case_06_1366x911_crop_center.jpg.webp?v=1666726898")`
};

const altFive = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/20221018_MonogramCC_Case_02_1366x911_crop_center.jpg.webp?v=1666799808")`
};

const picSix = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_CoreBracket1_Monogram_May20204545_ccb8b10a-0772-448b-9857-a14fa83bd5b7_1920x1280_crop_center.jpg.webp?v=1593651640")`
};

const altSix = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_CoreBracket1_Monogram_May2020_4578_6683fd8e-be63-45bb-9fbd-dd82a4838db8_1920x1280_crop_center.jpg.webp?v=1593651640")`
};

const picSeven = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_SliderHeroBracket1_Monogram_May20204536_8b0e1987-0315-491e-9951-a9404031b55a_1920x1280_crop_center.jpg.webp?v=1593651879")`
};

const altSeven = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_SliderBracket1_Monogram_May2020_4565_f941e8d9-d194-47ee-a54a-79132f105e34_1920x1280_crop_center.jpg.webp?v=1593651879")`
};

const picEight = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_KeysBracket1_Monogram_May20204548_c26eef0c-c95c-40e6-8fd3-abe1f59abfcd_1920x1280_crop_center.jpg.webp?v=1593651769")`
};

const altEight = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_KeysBracket1_Monogram_May2020_4571_43b65ca9-4fde-4f55-9f0e-32374554ce76_1920x1280_crop_center.jpg.webp?v=1593651769")`
};

const picNine = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_OrbiterBracket1_Monogram_May20204542_50105ec2-8b68-4ed5-ac4e-ac261c36459c_1920x1280_crop_center.jpg.webp?v=1593651849")`
};

const altNine = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_OrbiterHero_Monogram_May2020_4568_3d64e8b3-71ce-441a-9fcd-2b054c423310_1920x1280_crop_center.jpg.webp?v=1593651849")`
};

const picTen = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_DialHeroBracket1_Monogram_May20204539_375e79fb-32f0-447b-b606-3dd0ac8318f6_1920x1280_crop_center.jpg.webp?v=1593651701")`
};

const altTen = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "445px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_DialBracket1_Monogram_May2020_4575_981a6401-f834-4094-9a6e-6cd7d0b374ca_1920x1280_crop_center.jpg.webp?v=1593651701")`
};

const picEleven = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "450px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-midi-final-august_1920x1382_crop_center.jpg.webp?v=1661440892")`
};

const altEleven = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "700px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "450px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-midi-final-august_1920x1382_crop_center.jpg.webp?v=1661440892")`
};

const picTwelve = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "450px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-photo-final-august_1920x1382_crop_center.jpg.webp?v=1661440997")`
};

const altTwelve = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "700px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "450px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-photo-final-august_1920x1382_crop_center.jpg.webp?v=1661440997")`
};

const picThirdteen = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "650px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "450px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-video-final-august_1920x1382_crop_center.jpg.webp?v=1661441054")`
};

const altThirdteen = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "700px, 700px",
  backgroundPosition: "center",
  width: "450px",
  height: "450px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-video-final-august_1920x1382_crop_center.jpg.webp?v=1661441054")`
};

const picFourteen = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "680px, 750px",
  backgroundPosition: "center",
  width: "450px",
  height: "450px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/Care-updated-traveler_1920x1270_crop_center.jpg.webp?v=1633483052")`
};

const altFourteen = {
  position: "relative",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "680px, 750px",
  backgroundPosition: "center",
  width: "450px",
  height: "450px",
  transition: "0.5s ease",
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0974/7950/products/MONO_CONSOLE_CARE_STU_453eaa1a-02d9-4ba7-9d9a-8d05e2915f8f_1920x1270_crop_center.jpg.webp?v=1633485492")`
};

const buyNow = {
  opacity: "0"
};

const buyNowShow = {
  cursor: "pointer",
  // transition: "0.2s",
  backgroundColor: "#1a2456",
  borderColor: "#1a2456",
  border: "1px solid transparent",
  zIndex: "2",
  position: "relative",
  opacity: "1",
  borderRadius: "50rem",
  padding: "5px 15px 5px 15px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  fontSize: ".75rem",
  lineHeight: "1.5",
  fontWeight: "600",
  color: "white",
  fontFamily: "inherit"
};

const preOrder = {
  position: "absolute",
  padding: ".5rem .5rem",
  zIndex: "2",
  backgroundColor: "#ff8d6b",
  color: "#212529",
  fontWeight: "600",
  display: "inline-block",
  lineHeight: "1",
  letterSpacing: "1px",
  width: "100px",
  textAlign: "center",
  fontSize: "12px",
  textTransform: "uppercase",
  margin: "15px 333px"
};

const preOrder2 = {
  position: "absolute",
  padding: ".5rem .5rem",
  zIndex: "2",
  backgroundColor: "#ff8d6b",
  color: "#212529",
  fontWeight: "600",
  display: "inline-block",
  lineHeight: "1",
  letterSpacing: "1px",
  width: "100px",
  textAlign: "center",
  fontSize: "12px",
  textTransform: "uppercase",
  margin: "25px 333px"
};

export default function Main() {
  const scrollToRef = useRef();
  // 👇 These are useState effects that change background picture to a different picture when hovered over.
  const [background, setBackground] = useState(picOne);
  const [background2, setBackground2] = useState(picTwo);
  const [background3, setBackground3] = useState(picThree);
  const [background4, setBackground4] = useState(picFour);

  const [background5, setBackground5] = useState(picFive);
  const [background6, setBackground6] = useState(picSix);
  const [background7, setBackground7] = useState(picSeven);
  const [background8, setBackground8] = useState(picEight);
  const [background9, setBackground9] = useState(picNine);
  const [background10, setBackground10] = useState(picTen);
  const [background11, setBackground11] = useState(picEleven);
  const [background12, setBackground12] = useState(picTwelve);
  const [background13, setBackground13] = useState(picThirdteen);
  const [background14, setBackground14] = useState(picFourteen);

  const [buyNowButton, setBuyNowButton] = useState(buyNow);
  const [buyNowButton2, setBuyNowButton2] = useState(buyNow);
  const [buyNowButton3, setBuyNowButton3] = useState(buyNow);
  const [buyNowButton4, setBuyNowButton4] = useState(buyNow);

  const [buyNowButton5, setBuyNowButton5] = useState(buyNow);
  const [buyNowButton6, setBuyNowButton6] = useState(buyNow);
  const [buyNowButton7, setBuyNowButton7] = useState(buyNow);
  const [buyNowButton8, setBuyNowButton8] = useState(buyNow);
  const [buyNowButton9, setBuyNowButton9] = useState(buyNow);
  const [buyNowButton10, setBuyNowButton10] = useState(buyNow);
  const [buyNowButton11, setBuyNowButton11] = useState(buyNow);
  const [buyNowButton12, setBuyNowButton12] = useState(buyNow);
  const [buyNowButton13, setBuyNowButton13] = useState(buyNow);
  const [buyNowButton14, setBuyNowButton14] = useState(buyNow);

  return (
    <div className="mainContainer">
      {/* <NavBar /> */}
      <div className="First">
        <img
          className="firstImage"
          src=" https://monogramcc.com/static/9a0b554db1990565457610c5f83b3ad7/7f0fc/shop_cta_xl_896f6b8270.webp"
          alt="tools"
        />
        <div className="imageContainer">
          <h1 className="firstImageHeader">A CONSOLE FOR EVERY WORKFLOW</h1>
          <p className="firstImageP">Descover the perfect console for yours.</p>
        </div>

        {/* 👇 this is a scroll effect that scrolls to specific section of page. */}
        <div className="downButton">
          <FontAwesomeIcon
            icon={faAngleDown}
            onClick={() =>
              scrollToRef.current.scrollIntoView({
                behavior: "smooth"
              })
            }
          />
        </div>
      </div>
      {/* 👇 this is the refference section your onClick will scroll to. */}
      <div ref={scrollToRef} className="box_section">
        {/* 👇 box1 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <Link
          to="/box1"
          className="box1"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton(buyNowShow)}
          onMouseLeave={() => setBuyNowButton(buyNow)}
        >
          <p style={preOrder}>pre-order</p>
          <div
            onMouseEnter={() => setBackground(altOne)}
            onMouseLeave={() => setBackground(picOne)}
            style={background}
          ></div>

          <div
            className="headerBox"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">MINI CONSOLE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton}>SHOP NOW</button>
              <p className="price">$245</p>
            </div>

            <p
              style={{
                paddingTop: "25px",
                position: "absolute",
                fontSize: "14px"
              }}
            >
              Ideal for everyday shortcuts. Adaptable to any workflow.
            </p>
          </div>
        </Link>

        {/* 👇 box2 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <Link
          to="/box2"
          className="box2"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton2(buyNowShow)}
          onMouseLeave={() => setBuyNowButton2(buyNow)}
        >
          <p style={preOrder}>pre-order</p>
          <div
            onMouseEnter={() => setBackground2(altTwo)}
            onMouseLeave={() => setBackground2(picTwo)}
            style={background2}
          ></div>

          <div className="headerBox" style={{ position: "absolute" }}>
            <h1 className="button">AUDIO CONSOLE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton2}>SHOP NOW</button>
              <p className="price">$499</p>
            </div>

            <p
              style={{
                paddingTop: "25px",
                position: "absolute",
                fontSize: "14px"
              }}
            >
              Ideal for music & audio. Adaptable to any workflow.
            </p>
          </div>
        </Link>

        {/* 👇 box3 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <Link
          to="/box3"
          className="box3"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton3(buyNowShow)}
          onMouseLeave={() => setBuyNowButton3(buyNow)}
        >
          <p style={preOrder}>pre-order</p>
          <div
            onMouseEnter={() => setBackground3(altThree)}
            onMouseLeave={() => setBackground3(picThree)}
            style={background3}
          ></div>

          <div className="headerBox" style={{ position: "absolute" }}>
            <h1 className="button">PHOTO CONSOLE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton3}>SHOP NOW</button>
              <p className="price">$599</p>
            </div>

            <p
              style={{
                paddingTop: "25px",
                position: "absolute",
                fontSize: "14px"
              }}
            >
              Ideal for photo & video. Adaptable to any workflow.
            </p>
          </div>
        </Link>

        {/* 👇 box4 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <Link
          to="/box4"
          className="box4"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton4(buyNowShow)}
          onMouseLeave={() => setBuyNowButton4(buyNow)}
        >
          <p style={preOrder}>pre-order</p>
          <div
            onMouseEnter={() => setBackground4(altFour)}
            onMouseLeave={() => setBackground4(picFour)}
            style={background4}
          ></div>

          <div className="headerBox" style={{ position: "absolute" }}>
            <h1 className="button">VIDEO CONSOLE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton4}>SHOP NOW</button>
              <p className="price">$899</p>
            </div>

            <p
              style={{
                paddingTop: "25px",
                position: "absolute",
                fontSize: "14px"
              }}
            >
              Ideal for Vedio & Film. Adaptable to any workflow.
            </p>
          </div>
        </Link>
      </div>

      {/* 👇 Section 2 /////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="section2">
        <div className="section2Body">
          <h1 className="section2Header">Create your own console</h1>
          <p className="section2P">Add-on to make it perfect.</p>
        </div>
      </div>

      {/* 👇 Section 3 /////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="section3">
        {/* 👇 box5 /////////////////////////////////////////////////////////////////////////////////////////// */}
        <a
          href="/"
          className="box5"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton5(buyNowShow)}
          onMouseLeave={() => setBuyNowButton5(buyNow)}
        >
          <p style={preOrder2}>pre-order</p>
          <div
            onMouseEnter={() => setBackground5(altFive)}
            onMouseLeave={() => setBackground5(picFive)}
            style={background5}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">MONOGRAM CARRYING CASE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton5}>SHOP NOW</button>
              <p className="price">$59</p>
            </div>
          </div>
        </a>

        {/* 👇 box6 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <a
          href="/"
          className="box6"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton6(buyNowShow)}
          onMouseLeave={() => setBuyNowButton6(buyNow)}
        >
          <p style={preOrder2}>pre-order</p>
          <div
            onMouseEnter={() => setBackground6(altSix)}
            onMouseLeave={() => setBackground6(picSix)}
            style={background6}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">MONOGRAM CORE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton6}>SHOP NOW</button>
              <p className="price">$159</p>
            </div>
          </div>
        </a>

        {/* 👇 box7 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <a
          href="/"
          className="box7"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton7(buyNowShow)}
          onMouseLeave={() => setBuyNowButton7(buyNow)}
        >
          <p style={preOrder2}>pre-order</p>
          <div
            onMouseEnter={() => setBackground7(altSeven)}
            onMouseLeave={() => setBackground7(picSeven)}
            style={background7}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">SLIDER MODULE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton7}>SHOP NOW</button>
              <p className="price">$159</p>
            </div>
          </div>
        </a>

        {/* 👇 box8 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <a
          href="/"
          className="box8"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton8(buyNowShow)}
          onMouseLeave={() => setBuyNowButton8(buyNow)}
        >
          <p style={preOrder2}>pre-order</p>
          <div
            onMouseEnter={() => setBackground8(altEight)}
            onMouseLeave={() => setBackground8(picEight)}
            style={background8}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">ESSENTIAL KEYS MODULE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton8}>SHOP NOW</button>
              <p className="price">$129</p>
            </div>
          </div>
        </a>

        {/* 👇 box9 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <a
          href="/"
          className="box9"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton9(buyNowShow)}
          onMouseLeave={() => setBuyNowButton9(buyNow)}
        >
          <p style={preOrder2}>pre-order</p>
          <div
            onMouseEnter={() => setBackground9(altNine)}
            onMouseLeave={() => setBackground9(picNine)}
            style={background9}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">ORBITER MODULE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton9}>SHOP NOW</button>
              <p className="price">$159</p>
            </div>
          </div>
        </a>

        {/* 👇 box10 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <a
          href="/"
          className="box10"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => setBuyNowButton10(buyNowShow)}
          onMouseLeave={() => setBuyNowButton10(buyNow)}
        >
          <p style={preOrder2}>pre-order</p>
          <div
            onMouseEnter={() => setBackground10(altTen)}
            onMouseLeave={() => setBackground10(picTen)}
            style={background10}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">DIAL MODULE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton10}>SHOP NOW</button>
              <p className="price">$129</p>
            </div>
          </div>
        </a>

        {/* 👇 box11 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <a
          href="/"
          className="box11"
          style={{ textDecoration: "none", marginTop: "10px" }}
          onMouseEnter={() => setBuyNowButton11(buyNowShow)}
          onMouseLeave={() => setBuyNowButton11(buyNow)}
        >
          <div
            onMouseEnter={() => setBackground11(altEleven)}
            onMouseLeave={() => setBackground11(picEleven)}
            style={background11}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">CONSOLE PACK: AUDIO</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton11}>SHOP NOW</button>
              <p className="price">$29</p>
            </div>
          </div>
        </a>

        {/* 👇 box12 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <a
          href="/"
          className="box12"
          style={{ textDecoration: "none", marginTop: "10px" }}
          onMouseEnter={() => setBuyNowButton12(buyNowShow)}
          onMouseLeave={() => setBuyNowButton12(buyNow)}
        >
          <div
            onMouseEnter={() => setBackground12(altTwelve)}
            onMouseLeave={() => setBackground12(picTwelve)}
            style={background12}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">CONSOLE PACK: PHOTO</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton12}>SHOP NOW</button>
              <p className="price">$39</p>
            </div>
          </div>
        </a>

        {/* 👇 box13 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <a
          href="/"
          className="box13"
          style={{ textDecoration: "none", marginTop: "10px" }}
          onMouseEnter={() => setBuyNowButton13(buyNowShow)}
          onMouseLeave={() => setBuyNowButton13(buyNow)}
        >
          <div
            onMouseEnter={() => setBackground13(altThirdteen)}
            onMouseLeave={() => setBackground13(picThirdteen)}
            style={background13}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">CONSOLE PACK: VIDEO</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton13}>SHOP NOW</button>
              <p className="price">$69</p>
            </div>
          </div>
        </a>

        {/* 👇 box14 /////////////////////////////////////////////////////////////////////////////////////////// */}

        <a
          href="/"
          className="box14"
          style={{ textDecoration: "none", marginTop: "10px" }}
          onMouseEnter={() => setBuyNowButton14(buyNowShow)}
          onMouseLeave={() => setBuyNowButton14(buyNow)}
        >
          <div
            onMouseEnter={() => setBackground14(altFourteen)}
            onMouseLeave={() => setBackground14(picFourteen)}
            style={background14}
          ></div>

          <div
            className="headerBox2"
            style={{ position: "absolute", marginBottom: "50px" }}
          >
            <h1 className="button">MONOGRAM CARE</h1>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end"
              }}
            >
              <button style={buyNowButton14}>SHOP NOW</button>
              <p className="price">$19 - $129</p>
            </div>
          </div>
        </a>
      </div>

      {/* 👇 Section 4 "footer" /////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="footer">
        <h1 className="footerHeaderOne">Thank You!</h1>
      </div>
    </div>
  );
}
