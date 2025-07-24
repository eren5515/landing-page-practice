import logo from "../../images/Logo.png";
import Image from "next/image";
import "@/components/Navbar/Navbar.scss";
export default function Navbar() {
  return (
    <nav className="nav">
      <Image src={logo} alt="Logo" />
      <div className="nav-list">
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Home
        </a>
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Features
        </a>
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Community
        </a>
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Blog
        </a>
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Pricing
        </a>
        <button className="custom-button text -sm -medium -white">
          Register Now →
        </button>
      </div>
    </nav>
  );
}
