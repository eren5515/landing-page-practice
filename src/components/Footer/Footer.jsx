import Image from "next/image";
import logo from "../../images/Logo-second.png";
import "@/components/Footer/Footer.scss";
import sendLogo from "../../images/send-icon.png";
import socialIcons1 from "../../images/SocialIcons1.png";
import socialIcons2 from "../../images/SocialIcons2.png";
import socialIcons3 from "../../images/SocialIcons3.png";
import socialIcons4 from "../../images/SocialIcons4.png";

export default function Footer() {
  const socialIcons = [socialIcons1, socialIcons2, socialIcons3, socialIcons4];
  return (
    <footer className="footer">
      <div className="footer-left">
        <Image src={logo} alt="Logo" />
        <p className="text -xs -silver -regular">
          Copyright © 2020 Landify UI Kit. All rights reserved.
        </p>
        <div className="footer-left-social-icons">
          {socialIcons.map((icon, index) => (
            <Image key={index} src={icon} alt="Social Icon" />
          ))}
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-right-section">
          <h3 className="text -white -semibold -white">Company</h3>
          <ul className="footer-list">
            <li className="footer-list-item text -xs -regular -silver">
              About us
            </li>
            <li className="footer-list-item text -xs -regular -silver">Blog</li>
            <li className="footer-list-item text -xs -regular -silver">
              Contact us
            </li>
            <li className="footer-list-item text -xs -regular -silver">
              Pricing
            </li>
            <li className="footer-list-item text -xs -regular -silver">
              Testimonials
            </li>
          </ul>
        </div>

        <div className="footer-right-section">
          <h3 className="text -white -semibold -white">Support</h3>
          <ul className="footer-list">
            <li className="footer-list-item text -xs -regular -silver">
              Help center
            </li>
            <li className="footer-list-item text -xs -regular -silver">
              Terms of service
            </li>
            <li className="footer-list-item text -xs -regular -silver">
              Legal
            </li>
            <li className="footer-list-item text -xs -regular -silver">
              Privacy policy
            </li>
            <li className="footer-list-item text -xs -regular -silver">
              Status
            </li>
          </ul>
        </div>

        <div className="footer-right-mail">
          <h3 className="text -white -semibold -white">Stay up to date</h3>
          <label
            htmlFor="mail-input"
            className="footer-right-mail-input-wrapper"
          >
            <input
              id="mail-input"
              className="footer-right-mail-input"
              type="text"
              placeholder="Your email adress"
              name=""
            />
            <Image src={sendLogo} alt="send logo"></Image>
          </label>
        </div>
      </div>
    </footer>
  );
}
