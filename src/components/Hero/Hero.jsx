import Image from "next/image";
import hero from "../../images/hero.png";
import "@/components/Hero/Hero.scss";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="text -xxl -secondary-color -semibold">
          Lessons and insights
          <span className="text -xxl -primary-color -semibold">
            from 8 years
          </span>
        </h1>
        <p className="text -sm -third-color -regular">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="custom-button text -sm -white">Register</button>
      </div>
      <Image src={hero} alt="Hero" />

      <div className="dot-container">
        <span className="dot -active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}
