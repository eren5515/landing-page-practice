import Image from "next/image";
import statisticsIcon1 from "../../images/statistics-icon-1.png";
import statisticsIcon2 from "../../images/statistics-icon-2.png";
import statisticsIcon3 from "../../images/statistics-icon-3.png";
import statisticsIcon4 from "../../images/statistics-icon-4.png";

import "@/components/Statistics/Statistics.scss";
export default function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics-left">
        <h2 className="text -secondary-color -semibold -xl">
          Helping a local business{" "}
          <span className="text -primary-color -semibold -xl">
            reinvent itself
          </span>
        </h2>
        <p className="target-groups-item-description text -sm -secondary-color -regular">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="statistics-right">
        <div className="statistics-right-grid">
          <div className="statistics-right-grid-item">
            <Image
              src={statisticsIcon1}
              alt="statistics icon"
              className="statistics-right-grid-item-img"
            ></Image>
            <div className="statistics-right-grid-item-content">
              <h2 className="target-groups-item-header text -lg -secondary-color -bold">
                2,245,341
              </h2>
              <p className="target-groups-item-description text -sm -third-color -regular">
                Members
              </p>
            </div>
          </div>

          <div className="statistics-right-grid-item">
            <Image
              src={statisticsIcon2}
              alt="statistics icon"
              className="statistics-right-grid-item-img"
            ></Image>
            <div className="statistics-right-grid-item-content">
              <h2 className="target-groups-item-header text -lg -secondary-color -bold">
                46,328
              </h2>
              <p className="target-groups-item-description text -sm -third-color -regular">
                Clubs
              </p>
            </div>
          </div>

          <div className="statistics-right-grid-item">
            <Image
              src={statisticsIcon3}
              alt="statistics icon"
              className="statistics-right-grid-item-img"
            ></Image>
            <div className="statistics-right-grid-item-content">
              <h2 className="target-groups-item-header text -lg -secondary-color -bold">
                828,867
              </h2>
              <p className="target-groups-item-description text -sm -third-color -regular">
                Event Bookings
              </p>
            </div>
          </div>

          <div className="statistics-right-grid-item">
            <Image
              src={statisticsIcon4}
              alt="statistics icon"
              className="statistics-right-grid-item-img"
            ></Image>
            <div className="statistics-right-grid-item-content">
              <h2 className="target-groups-item-header text -lg -secondary-color -bold">
                1,926,436
              </h2>
              <p className="target-groups-item-description text -sm -third-color -regular">
                Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
