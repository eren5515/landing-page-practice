import logo from "../../images/Logo.png";
import Image from "next/image";
import "@/components/Navbar/Navbar.scss";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <Image src={logo} alt="Logo" /> 
      </Link>
      <div className="nav-list">
        <Link href="/" className="nav-list-item text -sm -medium -secondary-color">
          Home
        </Link>
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Features
        </a>
        <a className="nav-list-item text -sm -medium -secondary-color" href="">
          Community
        </a>
        <Link href="/blog" className="nav-list-item text -sm -medium -secondary-color" >
          Blog
        </Link>
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
