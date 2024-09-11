import { Component } from 'react';
import Header from '../Header'
import InsiteDetails from '../InsiteDetails';
import Reviews from '../Reviews';
import BookingProcess from '../BookingProcess';
import Accommodation from '../Accommodation';
import PopularCities  from '../PopularCities';
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { CiMoneyBill } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import './index.css'

const companyList = ['About',
    'How it works',
    'Refer a Friend',
    'Group Bookings',
    'New',
    'List with us',
    'New',
    'Partner with us',
    'New',
    'Universities',
    'New',
    'Careers']

const discoveryList = ['Blog',
    'Podcast',
    'Newsroom',
    'Amber Plus',
    'Media Mention',
    'Ambassador',
    'Scholarships',
    'Exams']

const supportList= ['Help Center',
    'Contact',
    'T&C',
    'Privacy Policy',
    'Sitemap']

const citiesList = ['London','Glasgow','Coventry','Birmingham',"Nottingham","Sheffield","Manchester",'Edinburgh','Leicester','Cardiff','Leeds','Newcastle',
    'Aberdeen','Portsmouth','Cambridge','Oxford','Southampton','Exeter','Bournemouth','Belfast','Bristol','Canterbury','Dublin',
    'Swansea','Loughborough','Brighton','Derby','Hatfield','Lincoln','Luton','Plymouth','Dallas','Cork','Melbourne','Sydney']


class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className='header-container'>
                    <div className='header-details'>
                        <Header/>
                    </div>
                    <div className='main-head-content'>
                        <h2 style={{fontSize:'56px'}}>Home away from home</h2>
                        <h1 style={{fontSize:'20px'}}>Book student accommodations near top universities and cities across the globe</h1>
                        <div className='comany-details'>
                            <div className='cmp-detail'><span><GoVerified/></span><p>Verified Properties</p></div>
                            <div className='cmp-detail'><span><BiSupport/></span><p>24x7 Assistance</p></div>
                            <div className='cmp-detail'><span><CiMoneyBill/></span><p>Lowest Price Guarantee</p></div>
                        </div>
                    
                        <div className='input-container'>
                            <input className='input-search form-control' type='search' placeholder='Search by' />  
                            <button className='search-butn'><CiSearch/></button>
                        </div>
                    </div>
                </div>
                
                <div>
                    <PopularCities/>
                </div>
                <div>
                    <InsiteDetails/>
                </div>
                <div>
                    <Reviews/>
                </div>
                <div>
                    <Accommodation/>
                </div>
                <div>
                    <BookingProcess/>
                </div>
                <div className='cities-container'>
                    <h1 style={{fontSize:'30px', lineHeight:'0px',fontWeight:'bold'}}>Hundreds of cities around the world</h1>
                    <p>Secure student apartments near esteemed universities and vibrant cities</p>
                    <div className='city-list'>
                        {citiesList.map(city => (
                            <div>
                                <p>{city}</p>
                            </div>
                        ))}
                    </div>


                </div>

                <div className='carts-conatiner d-flex flex-nowrap'>
                    <div className='partnerWitUs-container'>
                        <div>
                            <h1 className='cart-heading' style={{fontSize:'20px'}}>Partner With Us</h1>
                            <p>At amber, we offer seamless booking <br/> process and a robust sales support.</p> 
                        </div>
                        <button className='btn btn-primary'>Partner With Us</button>
                    </div>
                    <div className='listWithUs-container'>
                        <div>
                            <h1 className='cart-heading' style={{fontSize:'20px'}}>List With Us</h1>
                            <p className='cart-prg'>List your properties efficiently with amber.</p>
                        </div>
                        <button className='btn btn-primary'>List Properties</button>
                        
                    </div>
                </div>
                <div className='help-media-container'>
                    <div className='help-details'>
                        <h1 style={{fontSize:'25px', lineHeight:'0px'}}>Need help? Let's connect</h1>
                        <p>If you have any queries, feel free to contact us</p>
                    </div>
                    <div className='media-content d-flex'>
                        <button className='information-butn chat-button' type='button'>
                            <span className='reply-time'>2 Mins Reply</span>
                            <svg width="36" height="36" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M8.25 17.875C8.25 17.1145 7.63555 16.5 6.875 16.5H2.75C1.98945 16.5 1.375 15.8855 1.375 15.125V2.75C1.375 1.98945 1.98945 1.375 2.75 1.375H19.25C20.0105 1.375 20.625 1.98945 20.625 2.75V15.125C20.625 15.8855 20.0105 16.5 19.25 16.5H13.2902C12.9937 16.5 12.7016 16.5945 12.4652 16.775L8.25 19.9375V17.875ZM2.75 0C1.2332 0 0 1.2332 0 2.75V15.125C0 16.6418 1.2332 17.875 2.75 17.875H5.5H6.875V19.25V21.3125C6.875 21.5746 7.02109 21.8109 7.25313 21.927C7.48516 22.043 7.76445 22.0172 7.975 21.8625L13.2902 17.875H19.25C20.7668 17.875 22 16.6418 22 15.125V2.75C22 1.2332 20.7668 0 19.25 0H2.75ZM8.25 7.90625C8.5235 7.90625 8.78581 7.7976 8.9792 7.6042C9.1726 7.41081 9.28125 7.1485 9.28125 6.875C9.28125 6.6015 9.1726 6.33919 8.9792 6.1458C8.78581 5.9524 8.5235 5.84375 8.25 5.84375C7.9765 5.84375 7.71419 5.9524 7.5208 6.1458C7.3274 6.33919 7.21875 6.6015 7.21875 6.875C7.21875 7.1485 7.3274 7.41081 7.5208 7.6042C7.71419 7.7976 7.9765 7.90625 8.25 7.90625ZM13.75 7.90625C14.0235 7.90625 14.2858 7.7976 14.4792 7.6042C14.6726 7.41081 14.7812 7.1485 14.7812 6.875C14.7812 6.6015 14.6726 6.33919 14.4792 6.1458C14.2858 5.9524 14.0235 5.84375 13.75 5.84375C13.4765 5.84375 13.2142 5.9524 13.0208 6.1458C12.8274 6.33919 12.7188 6.6015 12.7188 6.875C12.7188 7.1485 12.8274 7.41081 13.0208 7.6042C13.2142 7.7976 13.4765 7.90625 13.75 7.90625ZM6.69883 10.8324C6.41523 11.0859 6.39375 11.5199 6.64297 11.8035C7.71289 12.998 9.26836 13.75 11 13.75C12.7316 13.75 14.2871 12.998 15.357 11.8035C15.6105 11.5199 15.5848 11.0859 15.3012 10.8324C15.0176 10.5789 14.5836 10.6047 14.3301 10.8883C13.5137 11.7992 12.3234 12.375 11 12.375C9.67656 12.375 8.48633 11.7992 7.66992 10.884C7.41641 10.6004 6.98242 10.5789 6.69883 10.8281V10.8324Z" fill="#EC6F7F"></path></g><defs><clipPath id="clip0_7313_6568"><rect width="22" height="22" fill="white"></rect></clipPath></defs></svg>
                            Live Chat
                        </button>
                    
                        <button className='information-butn' type='button'>
                            <span className='reply-time' style={{color:'#046c4e'}}>2 Mins Reply</span>
                            <svg viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" fill="#000" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            Chat on Whatsapp
                        </button>
                        <button className='information-butn' type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#E3A008" viewBox="0 0 512 512"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM32 128V167.9L227.6 311.3C244.5 323.7 267.5 323.7 284.4 311.3L480 167.9V128C480 110.3 465.7 96 448 96H63.1C46.33 96 31.1 110.3 31.1 128H32zM32 207.6V384C32 401.7 46.33 416 64 416H448C465.7 416 480 401.7 480 384V207.6L303.3 337.1C275.1 357.8 236.9 357.8 208.7 337.1L32 207.6z"></path></svg>
                            Email Us
                        </button>
                        <button className='information-butn' type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36" height="36" fill="#3F83F8"><path d="M484.6 330.6C484.6 330.6 484.6 330.6 484.6 330.6l-101.8-43.66c-18.5-7.688-40.2-2.375-52.75 13.08l-33.14 40.47C244.2 311.8 200.3 267.9 171.6 215.2l40.52-33.19c15.67-12.92 20.83-34.16 12.84-52.84L181.4 27.37C172.7 7.279 150.8-3.737 129.6 1.154L35.17 23.06C14.47 27.78 0 45.9 0 67.12C0 312.4 199.6 512 444.9 512c21.23 0 39.41-14.44 44.17-35.13l21.8-94.47C515.7 361.1 504.7 339.3 484.6 330.6zM457.9 469.7c-1.375 5.969-6.844 10.31-12.98 10.31c-227.7 0-412.9-185.2-412.9-412.9c0-6.188 4.234-11.48 10.34-12.88l94.41-21.91c1-.2344 2-.3438 2.984-.3438c5.234 0 10.11 3.094 12.25 8.031l43.58 101.7C197.9 147.2 196.4 153.5 191.8 157.3L141.3 198.7C135.6 203.4 133.8 211.4 137.1 218.1c33.38 67.81 89.11 123.5 156.9 156.9c6.641 3.313 14.73 1.531 19.44-4.219l41.39-50.5c3.703-4.563 10.16-6.063 15.5-3.844l101.6 43.56c5.906 2.563 9.156 8.969 7.719 15.22L457.9 469.7z"></path></svg>
                            +91 8035735724
                        </button>
                        
                    </div>
                </div>
                <div className='end-container'>
                    <div className='about-compy-details'>
                        <img src='https://prod-static-assets.amberstudent.com/images/amber-hd.svg?auto=format&trim=auto' alt='logo'/>
                        <p style={{lineHeight:'0px'}}>amber © 2024. All rights reserved.</p>
                        <div className='insite-cart'>
                            <img src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg" alt='rating'/>
                            <h1 className='insite-header'>4.8/5 on Trustpilot</h1>
                            <p>5000+ students have rated us excellent for our services.</p>
                        </div>
                        <div className='app-payment-container'>
                            <div className='app-container'>
                                <p style={{lineHeight:'0px'}}>Get the app</p>
                                <div className='icons-container'>
                                    <a data-testid="footer-get-app-link-Playstore" target="_blank" href="https://play.google.com/store/apps/details?id=com.amberstudent" aria-label="Play Store" rel="noreferrer">
                                        <img height="20px" width="20px" src="https://prod-static-assets.amberstudent.com/images/playstore-android.svg?auto=format&trim=auto" alt="play store" data-testid="Play-store-Image" />
                                    </a>
                                    <img height="20px" width='25px' src='https://prod-static-assets.amberstudent.com/images/app-store.svg?auto=format&trim=auto' alt='apple-icon'/>
                                </div>
                            </div>
                            <div class="AppDownload-module__divider"></div>
                            <div className='payment-container'>
                                <p style={{lineHeight:'0px'}}>Payment Options</p>
                                <img src='https://prod-static-assets.amberstudent.com/images/footer_payment_partners.svg?auto=format&trim=auto' alt='payment-icons'/>
                            </div>
                        </div>
                    </div>
                    <div className='other-details'>
                        <div className='list-container'>
                            <ul>
                                <h3>Company</h3>
                                {companyList.map(eachItem => (
                                    <li>{eachItem}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='list-container'>
                            <ul>
                                <h3>Discover</h3>
                                {discoveryList.map(eachItem => (
                                    <li>{eachItem}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='list-container'>
                            <ul>
                                <h3>Support</h3>
                                {supportList.map(eachItem =>(
                                    <li>{eachItem}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='contact-container'>
                        <h3>Contact us</h3>
                        <hr/>
                        <div className='icons'><FiPhone/><span> +91 8035735724</span></div>
                        <div className='icons'><CiMail/><span></span> contact@amberstudent.com</div>
                        <div className='icons'><FaWhatsapp/><span> WhatsApp</span></div>
                        <div className='icons'><IoLocationOutline/><span> 40 E Main St # 1215 Newark 1971...</span></div>
                        <div>
                            <p>Follow us on</p>
                            <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Linkedin.svg?auto=format&trim=auto' alt='linkedin'/>
                            <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Facebook.svg?auto=format&trim=auto' alt='facebook'/>
                            <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Instagram.svg?auto=format&trim=auto' alt='insta'/>
                            <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Youtube.svg?auto=format&trim=auto' alt='youtube'/>
                            <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Twitter.svg?auto=format&trim=auto' alt='twitter'/>
                            <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/pinterest.svg?auto=format&trim=auto' alt='pinterest'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home