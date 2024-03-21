import React from 'react'
import "./Home.css"
import TEAMlogo from "./assets/TEAM_logo.png"
// import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300&display=swap");
// import url(@fortawesome/free-solid-svg-icons);
import NITAlogo from "./assets/NITA_logo.png"
import AnumeshPhoto from './assets/AnumeshPhoto (Custom).jpeg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Sl1img from "./assets/Slide1.jpg"
import Sl2img from "./assets/Slide2.jpg"
import Sl3img from "./assets/Slide3.jpg"
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaCreativeCommons } from "react-icons/fa6";

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];


const Home= () => {
  return(
    <div className='body'>
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></link>
      <header className='header' id='home'>
        {/* <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
        </div> */}
        <img src={TEAMlogo} alt="Club Logo" className="logo" />
        <h1 class="wordCarousel">
          <span>TEAM XANTHRONZ: </span>
            <div>
                <ul class="flip5">
                    <li>Race...</li>
                    <li>Build..</li>
                    <li>Design.</li>
                </ul>
            </div>
        </h1>
      </header>
      <div clasName="container">
        <div className="navbar">
            <a className="a" href="#home">Home</a>
            <a className='a' href="#teams">Our Team</a>
            <a className='a' href="#achievements">Gallery</a>
            <a className='a' href="#Contact">Contact</a>
            <a className='a Register-Login' href="/register">Register/Login</a>
        </div>

        <div className="vediostream">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <Slide
          autoplay={true }
          interval={6}
          onChange={function noRefCheck(){}}
          onStartChange={function noRefCheck(){}}
        >
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Sl3img})` 
              }}
            >
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Sl2img})` 
              }}
            >
              
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Sl1img})` 
              }}
            >
              
            </div>
          </div>
        </Slide>
        <div className='Mess-Sec'>
        <div className="messages single">
            <div className="project-card project2" >
                <div className="project-number odd"> 01</div>
                <div className="project-content left">
                    <div className="project-skills-container">
                        <img src="frontend\src\components\assets\NITA_LOGO.jpeg" alt="Club Logo" className="Mess-logo" />
                    </div>
                    <h2 className="project-name">SAE Baja</h2>
                    <div className="project-description">
                        I have added features to add the starting and ending location of your walk or run .The data is stored in the local server so even if you close the website your info will not be lost and as there is no back-end rendering of user data so it is completely safe.
                    </div>
                </div>
            </div>
        </div>
        <div className="messages ">
            <div className="project-card project2" >
                <div className="project-number odd"> 01 </div>
                <div className="project-content left">
                    <div className="project-skills-container">
                        <img src='' alt="Club Logo" className="Mess-logo" />
                    </div>
                    <h2 className="project-name">SAE Baja</h2>
                    <div className="project-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, deserunt.
                    </div>
                </div>
            </div>
            <div className="project-card project2" >
                <div className="project-number odd"> 02 </div>
                <div className="project-content left">
                    <div className="project-skills-container">
                        <img src="frontend\src\components\assets\NITA_LOGO.jpeg" alt="Club Logo" className="Mess-logo" />
                    </div>
                    <h2 className="project-name">SAE Baja</h2>
                    <div className="project-description">
                        I have added features to add the starting and ending location of your walk or run .The data is stored in the local server so even if you close the website your info will not be lost and as there is no back-end rendering of user data so it is completely safe.
                    </div>
                </div>
            </div>
        </div>
        <div className="messages">
            <div className="project-card project2" >
                <div className="project-number odd"> 01 </div>
                <div className="project-content left">
                    <div className="project-skills-container">
                        <img src="frontend\src\components\assets\NITA_LOGO.jpeg" alt="Club Logo" className="Mess-logo" />
                    </div>
                    <h2 className="project-name">SAE Baja</h2>
                    <div className="project-description">
                        I have added features to add the starting and ending location of your walk or run .The data is stored in the local server so even if you close the website your info will not be lost and as there is no back-end rendering of user data so it is completely safe.
                    </div>
                </div>
            </div>
            <div className="project-card project2" >
                <div className="project-number odd"> 02 </div>
                <div className="project-content left">
                    <div className="project-skills-container">
                        <img src="frontend\src\components\assets\NITA_LOGO.jpeg" alt="Club Logo" className="Mess-logo" />
                    </div>
                    <h2 className="project-name">SAE Baja</h2>
                    <div className="project-description">
                        I have added features to add the starting and ending location of your walk or run .The data is stored in the local server so even if you close the website your info will not be lost and as there is no back-end rendering of user data so it is completely safe.
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='team-members-container' id='teams'>
          
        <section >
          <div className="Our-team-text ">
            <p>Meet Our Team</p>
          </div>
          <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>

        </section>
        <section>
          <div className="Our-team-text">
            <p>RollCage</p>
          </div>
          <div class="team-member">
                <img    src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
        </section>
        <section>
        <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
          <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
          <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
        </section>
        <section>
          <div className="Our-team-text">
            <p>Brakes</p>
          </div>
          <div class="team-member">
                <img    src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
        </section>
        <section>
        <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
          <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
          <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
        </section>
        <section>
          <div className="Our-team-text">
            <p>PowerTrain</p>
          </div>
          <div class="team-member">
                <img    src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
        </section>
        <section>
        <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
          <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
          <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
        </section>
        <section>
          <div className="Our-team-text">
            <p>Steering</p>
          </div>
          <div class="team-member">
                <img    src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
        </section>
        <section>
        <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
          <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header ">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
          <div class="team-member">
                <img src={TEAMlogo} alt="Team Member 1" className='user-image'/>
                <h2>Avinash </h2>
                <p>Captain</p>
                <div className="icon-wrapper-header">
                <FaFacebook className='header-icons'></FaFacebook>
                <FaInstagram className='header-icons'></FaInstagram>
                <FaLinkedinIn className='header-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='header-icons'></FaSquareXTwitter>
                <FaYoutube className='header-icons'></FaYoutube>
              </div>
          </div>
        </section>
        </div>

        <div id='Contact' className="contactus-form-container">
            <div className="container-form">
                <h1 className="contactus-heading">Contact Us</h1>
                <h3 className="contactus-subheading">Questions,thoughts, Or just want to say hello?
                </h3>
                <div className="contactus-form">
                    <form className="form" action="">
                        <div className="formfield-container">
                            <input type="text"
                            class="formfield"
                            name="Name"
                            id=""
                            placeholder="Enter your name"
                            />
                            <input class="formfield" type="email" name="email" id="" placeholder="Enter your email address"/>
                            <input class="formfield" type="text" name="subject" id="" placeholder="Enter your subject"/>
    
                            <textarea class="formfield formfield-textarea" name="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
    
                        </div>
                        <div>
                            <button type="submit" className="btn-pink" id="submit-btn">
                                Send Message  <FaRegPaperPlane>  </FaRegPaperPlane>
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        <footer >
          <div className="container-form">
            <div className="footer-wrapper">
              <div className="footer-faded-text">Jai Shree Ram</div>
              <div className="link-wrapper">
              </div>
              <div className='All-rights' ><FaCreativeCommons></FaCreativeCommons>All Rights are reserved</div>
              <div className="icon-wrapper">
                <FaFacebook className='footer-icons'></FaFacebook>
                <FaInstagram className='footer-icons'></FaInstagram>
                <FaLinkedinIn className='footer-icons'></FaLinkedinIn>
                <FaSquareXTwitter className='footer-icons'></FaSquareXTwitter>
                <FaYoutube className='footer-icons'></FaYoutube>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home