import './Dashboard.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.webp'
import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import lawyersData from "./lawyers.json"

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // read
        console.log("");
      } else if (!user) {
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (

    <>
      <main>
        <nav className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className={`menu ${menuOpen ? 'show' : ''}`}>
            <ul>
              <li><a href="#">Prisoners cases</a></li>
              <li><a href="#">Documents</a></li>
              <li><a href="#">Legal Resources</a></li>
              <li><a href="#">Support</a></li>
              <li className='dot'><a href="#">•</a></li>
              <li><a href="#" onClick={handleSignOut}>Log Out</a></li>
              <li><a href="#"><button className='profile_btn'>Profile</button></a></li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </nav>
        <div className="maintxt">
          <h1><span className="blue">Find the</span>Efficient<br></br>Lawyer <span className='blue'>here!</span></h1>
          <p>For the welfare, By the prisoners</p>
        </div>
        <div className="search">
          <div className="s_bar_c">
            <img src="src/assets/search_icon.png" alt="" />
            <div className="vl"></div>
            <input type="text" placeholder='Type the name of the lawyer with his/her speciality' />
          </div>
          <button>Search</button>
        </div>
        <div className="navigator">
          <span className='nearby'>Nearby</span>
          <span className='seeall'>See All</span>
        </div>
        <div className="lawyers">
          {lawyersData.map((lawyers, index) => (
            <div className="lawyer" key={index}>
              <div className="up">
                <img src={lawyers.imageURL} alt="College Logo" />
                <div className="context">
                  <p>{lawyers.name}</p>
                  <span>{lawyers.location}</span>
                </div>
              </div>
              <div className="down">
                <div className="ctc">{lawyers.fees}</div>
                <div className="time">{lawyers.time}</div>
                <div className="time">{lawyers.availability}</div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Dashboard