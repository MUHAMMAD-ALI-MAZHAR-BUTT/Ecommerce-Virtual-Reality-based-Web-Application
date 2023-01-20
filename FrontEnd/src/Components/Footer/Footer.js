import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../CSS/Component/Footer/Footer.css"
function Footer() {
  return (
   <>
    <div className="container-fluid Footer px-sm-5 py-4 ">
    <div className="row">
    <div className="col-sm-3">
            <div className="d-flex flex-column bd-highlight ">
                <div><h5 className='Social-Links-Heading'>HELP</h5></div>
                <div className="bd-highlight">   
                <NavLink to="/ContactUs" className="Help-Items">Contact Us</NavLink>
                </div>
                <div className="bd-highlight">     
                <NavLink to="/AboutUs" className="Help-Items">About Us</NavLink>
                </div>
                <div className="bd-highlight">     
                <NavLink to="/FAQS" className="Help-Items">Customer Help – FAQs</NavLink>
                </div>
                <div className="bd-highlight">    
                <NavLink to="/PrivacyPolicy" className="Help-Items">Privacy Policy</NavLink> 
                </div>
                <div className="bd-highlight">    
                <NavLink to="/Team" className="Help-Items">Team</NavLink> 
                </div>
                <div className="bd-highlight">    
                <NavLink to="/Services" className="Help-Items">Services</NavLink> 
                </div>
        </div>
</div>
        <div className="col-sm-3">
            <div className="d-flex flex-column bd-highlight ">
                <div><h5 className='Social-Links-Heading'>FOLLOW US</h5></div>
                <div className="bd-highlight Social-links-List">     
                <i className="fa-brands fa-facebook p-1 Social-Link-Icons childOfSocial-links-List"></i>
                <a href="https://www.facebook.com/" rel="noreferrer"  target="_blank" className="Social-Links childOfSocial-links-List">Facebook</a></div>
                <div className="bd-highlight Social-links-List"><i className="fa-brands fa-square-instagram p-1 Social-Link-Icons childOfSocial-links-List"></i><a href="https://www.instagram.com/" rel="noreferrer"  target="_blank" className="Social-Links childOfSocial-links-List">Instagram</a></div>
                <div className="bd-highlight Social-links-List"><i className="fa-brands fa-twitter p-1 Social-Link-Icons childOfSocial-links-List"></i><a href="https://twitter.com/login" target="_blank" rel="noreferrer"  className="Social-Links childOfSocial-links-List">Twitter</a></div>
                <div className="bd-highlight Social-links-List"><i className="fa-brands fa-google p-1 Social-Link-Icons childOfSocial-links-List"></i><a href="https://www.facebook.com/" target="_blank" className="Social-Links childOfSocial-links-List" rel="noreferrer" >Gmail</a></div>
                <div className="bd-highlight Social-links-List"><i className="fa-brands fa-pinterest p-1 Social-Link-Icons childOfSocial-links-List"></i><a href="https://www.pinterest.com/" target="_blank" className="Social-Links childOfSocial-links-List" rel="noreferrer" >Pinterest</a></div>
                <div className="bd-highlight Social-links-List"><i className="fa-brands fa-youtube p-1 Social-Link-Icons childOfSocial-links-List"></i><a href="https://www.youtube.com/" target="_blank" className="Social-Links childOfSocial-links-List" rel="noreferrer" >YouTube</a></div>
            </div>
        </div>

        <div className='col pt-2'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.967869733126!2d74.3541296146756!3d31.57992895135939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b273d6ed0c1%3A0x4dcac84ea2200944!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Lahore!5e0!3m2!1sen!2s!4v1669797829747!5m2!1sen!2s" width="500" height="300" className='Map'  loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Location'></iframe>
            </div>
    </div>
    <div className="row Footer-Bottom">
    © Metamar 2022
Built with love by Metamart Digital Team
    </div>
    </div>
   </>
  )
}

export default Footer