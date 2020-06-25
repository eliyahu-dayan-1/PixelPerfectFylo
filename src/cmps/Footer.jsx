import React from 'react'

export function Footer() {
    return (
        <footer className="flex column full align-center">
            <div className="details flex space-between">
            <div className="logo"></div>
                <div className="location-container flex">
                    <div className="location-icon icon"></div>
                    <div className="location-desc desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </div>
                </div>

                <div className="contact-us flex column wrap">
                    <div className="phone-container flex">
                        <div className="phone-icon icon"></div>
                        <div className="phone desc">+1-543-123-4567</div>
                    </div>
                    <div className="email-container flex">
                        <div className="email-icon icon"></div>
                        <div className="email desc">example@fylo.com</div>
                    </div>
                </div>

                <nav className="footer-links flex">
                    <ul className="clean-list">
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                    <ul className="clean-list">
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </nav>

                <div className="social-networks flex">
                    <div className="facebook-icon"></div>
                    <div className="tweeter-icon"></div>
                    <div className="instagram-icon"></div>
                </div>
            </div>

        </footer >
    )
}
