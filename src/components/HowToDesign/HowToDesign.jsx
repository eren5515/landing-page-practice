import Image from "next/image";
import "@/components/HowToDesign/HowToDesign.scss";
import howToDesignImage from "../../images/pana.png";
export default function HowToDesign() {
  return (
    <div className="howtodesign">
      <Image src={howToDesignImage} alt="image"></Image>
      <div className="howtodesign-content">
        <h2 className="text -secondary-color -semibold -xl">
          How to design your site footer like we did
        </h2>
        <p className="target-groups-item-description text -sm -third-color -regular">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="custom-button text -sm -white">Learn More</button>
      </div>
    </div>
  );
}
