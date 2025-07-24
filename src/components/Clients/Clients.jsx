import Image from "next/image";
import "@/components/Clients/Clients.scss";
import clientLogo1 from "../../images/clientlogo1.png";
import clientLogo2 from "../../images/clientlogo2.png";
import clientLogo3 from "../../images/clientlogo3.png";
import clientLogo4 from "../../images/clientlogo4.png";
import clientLogo5 from "../../images/clientlogo5.png";
import clientLogo6 from "../../images/clientlogo6.png";
import clientLogo7 from "../../images/clientlogo7.png";

export default function Clients() {
  const clientLogos = [
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
  ];

  return (
    <div className="clients">
      <h2 className="text -secondary-color -semibold -xl">Our Clients</h2>
      <p className="text -sm -third-color -regular">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="clients-logos">
        {clientLogos.map((logo, index) => (
          <Image key={index} src={logo} alt="Client Logo" />
        ))}
      </div>
    </div>
  );
}
