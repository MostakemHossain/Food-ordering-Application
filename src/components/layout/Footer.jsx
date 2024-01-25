import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
       <div>
         <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <Link className="text-primary font-semibold text-3xl" href="/">PIZZA BOX</Link>
                <p className="w-[130px] text-gray-700 text-bold">Customer satisfaction is at the heart of our mission. We strive to exceed your expectations with every order.</p>
            </div>

            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                
            </nav>

            {/* Social Media Links */}
            <div className="mt-4">
                <a href="#" className="text-primary hover:text-primary-dark mx-2" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary-dark mx-2" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary-dark mx-2" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                </a>
            </div>
            
        </footer>
        <aside>
        <p className="text-center">Copyright © 2024 - All right reserved by Pizza International</p>
      </aside>
       </div>
    );
};

export default Footer;
