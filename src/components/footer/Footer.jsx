import React, { act } from "react";
import logo from "../../images/home/logo2.png";
import facebook from "../../images/home/facebook-icon.png";
import linkedin from "../../images/home/linkedin-icon.png";
import twitter from "../../images/home/twitter-icon.png";
import whatapp from "../../images/home/whatapp.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import galleryimg1 from '../../images/home/galleryimg.png'
import galleryimg2 from '../../images/home/galleryimg2.png'
import galleryimg3 from '../../images/home/galleryimg3.png'
import galleryimg4 from '../../images/home/galleryimg4.png'
import galleryimg5 from '../../images/home/galleryimg5.png'
import galleryimg6 from '../../images/home/galleryimg6.png'
import how from '../footer/how.png'
const Footer = () => {
  const [active, setActive] = useState("Home");

  const itemData = [
    { img: galleryimg1 },
    { img: galleryimg2 },
    { img: galleryimg3 },
    { img: galleryimg4 },
    { img: galleryimg5 },
    { img: galleryimg6 },
  ];


  return (
    <>
      <div className="container-fluid leaf6 pt-5">
        <div className="row mx-lg-3  py-3 footertext">
          <div className="col-xl-3 col-lg-3 col-md-6  col-sm-6 col-12 my-2">
            <img src={logo} alt="" className="img-fluid" />
            <p className="py-3 fs-18 m-0 fw-500 ">
              Fruiting Desert is dedicated to providing the freshest and highest
              quality fruits, sourced sustainably from local and exotic farms.
            </p>
            <div className="d-flex ">
              <Link to="#">
                <img src={facebook} className="img-fluid me-2 " alt="" />
              </Link>
              <Link to="#">
                <img src={linkedin} className="img-fluid mx-2 " alt="" />
              </Link>
              <Link to="#">
                <img src={twitter} className="img-fluid mx-2 " alt="" />
              </Link>
              <Link to="#">
                <img src={whatapp} className="img-fluid mx-2 " alt="" />
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 my-2 footer">
            <h2 className="fw-700 py-3">Ouick Links</h2>
            <ul className="fw-500 fs-20 p-0 ">
              <li><Link className="text-dark" to="/">Home</Link></li>
              <li><Link className="text-dark" to="/about">About</Link></li>
              <li><Link className="text-dark" to="/products">Product</Link></li>
              <li><Link className="text-dark" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 my-2">
            <h2 className="fw-700 py-3">Contact Us</h2>
            <ul className="fw-500 fs-24  p-0 ">
              <li>
                <FaLocationDot className="fs-24 c_2C7D05" />
                <span className="ms-3 fs-18">
                  123 Fresh Lane,  Fruit City, India
                </span>
              </li>
              <li className="d-flex align-items-center">
                <IoCall className="fs-20 c_2C7D05" />
                <div className="ms-3 fs-18">
                  +91 12345 67890 <br />
                  +91 0987654321
                </div>
              </li>
              <li>
                <IoIosMail className="fs-24 c_2C7D05" />
                <span className="ms-3 fs-18">support@fruitingdesert.com</span>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 my-2">
            <h2 className="fw-700 py-3">Instagram</h2>
            <ImageList
              sx={{ width: 249, height: 172 }}
              cols={3}
              rowHeight={84}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  loading="lazy"
                />
              </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 px-4">
            <div className="d-block d-md-flex justify-content-between">
              <p className="fw-400 fs-20 ">Copyrights @ 2024, All Rights Reserved</p>
              <p className="fw-400 fs-20 ">Made in H<span><img src={how} className="img-fluid" alt="" /></span>W</p>
              <div className="d-flex fw-400 fs-20">
                <p className="me-5 ">Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
