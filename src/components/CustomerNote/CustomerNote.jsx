import Image from "next/image";
import image from "../../images/tesla.png";
import "@/components/CustomerNote/CustomerNote.scss";
import clientLogo1 from "../../images/clientlogo1.png";
import clientLogo2 from "../../images/clientlogo2.png";
import clientLogo3 from "../../images/clientlogo3.png";
import clientLogo4 from "../../images/clientlogo4.png";
import clientLogo5 from "../../images/clientlogo5.png";
import clientLogo6 from "../../images/clientlogo6.png";
export default function CustomerNote() {
  const clientLogos = [
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
  ];
  return (
    <div className="customer-note">
      <Image className="tesla-logo" src={image} alt="tesla logo"></Image>
      <div className="customer-note-content">
        <p className=" text -sm -third-color -medium">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>

        <div className="customer-note-content-name">
          <h3 className="text -md -semibold -primary-color">Tim Smith</h3>
          <p className=" text -sm -third-color -regular">
            British Dragon Boat Racing Association
          </p>
        </div>
        <div className="customer-note-content-logos">
          {clientLogos.map((logo, index) => (
            <Image key={index} src={logo} alt="Client Logo" />
          ))}
          <h2 className="text -primary-color -md -semibold">
            Meet all customers →
          </h2>
        </div>
      </div>
    </div>
  );
}
