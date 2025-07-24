import logo from "../../images/Logo.png";
import Image from "next/image";
import readMore1 from "../../images/read-more-1.png";
import readMore2 from "../../images/read-more-2.png";
import readMore3 from "../../images/read-more-3.png";
import "@/components/ReadMore/ReadMore.scss";
export default function ReadMore() {
  return (
    <div className="read-more">
      <h2 className="read-more-header text -secondary-color -semibold -xl">
        Caring is the new marketing
      </h2>
      <p className="read-more-text  text -sm -third-color -regular">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="read-more-card-list">
        <div className="read-more-card">
          <Image src={readMore1} alt="image"></Image>
          <div className="read-more-card-extra">
            <h3 className="text -third-color -semibold -md">
              Creating Streamlined Safeguarding Processes with OneRen
            </h3>
            <p className="text -primary-color -semibold -md">Read more →</p>
          </div>
        </div>

        <div className="read-more-card">
          <Image src={readMore2} alt="image"></Image>
          <div className="read-more-card-extra">
            <h3 className="text -third-color -semibold -md">
              What are your safeguarding responsibilities and how can you manage
              them?
            </h3>
            <p className="text -primary-color -semibold -md">Read more →</p>
          </div>
        </div>

        <div className="read-more-card">
          <Image src={readMore3} alt="image"></Image>
          <div className="read-more-card-extra">
            <h3 className="text -third-color -semibold -md">
              Revamping the Membership Model with Triathlon Australia
            </h3>
            <p className="text -primary-color -semibold -md">Read more →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
