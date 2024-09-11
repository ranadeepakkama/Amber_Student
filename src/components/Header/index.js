import './index.css'
import { BiSupport } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";



const Header = () => (
    <div>
        <div className="header">
            <><img className="cmpy-logo" src="https://prod-static-assets.amberstudent.com/images/logo/amber-logo-light.svg" alt="amber-logo-dark" data-testid="Amber-logo"/></>
            <div>
                <ul className='header-right-section'>
                    <li><button className='downld-butn butn' type="button"><img className='download-img' src='https://prod-static-assets.amberstudent.com/images/App_Download_White_Nav_bar_2.gif?w=80' alt="download-icon"/>Download App</button></li>
                    <li><button className='butn' type="button"><BiSupport/> Support</button></li>
                    <li><button className='butn' type="button"><MdFavoriteBorder/> Shortlist</button></li>
                    <li><button className='butn' type='button'><CiLogin/> Login</button></li>
                    <li><button className='butn' type='button'><FaCircleUser/></button></li>
                </ul>
            </div>
            
        </div>
    </div>
)

export default Header