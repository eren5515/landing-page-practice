import Image from "next/image";
import image from "../../images/rafiki.png";

import "@/components/Pixelgrade/Pixelgrade.scss";
export default function Pixelgrade() {
  return (
    <div className="pixelgrade">
      <Image src={image} alt="image" />

      <div className="pixelgrade-content">
        <h2 className="pixelgrade-content-header text -secondary-color -semibold -xl">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="pixelgrade-content-text text -xs -third-color -regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="custom-button text -sm -medium -white">
          Learn More
        </button>
      </div>
    </div>
  );
}
