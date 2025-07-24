import logo from "../../images/Logo.png";
import targetIcon1 from "../../images/target-icon-1.png";
import targetIcon2 from "../../images/target-icon-2.png";
import targetIcon3 from "../../images/target-icon-3.png";

import Image from "next/image";
import "@/components/TargetGroups/TargetGroups.scss";
export default function TargetGroups() {
  return (
    <div className="target-groups">
      <h2 className="target-groups-header text -secondary-color -semibold -xl">
        Manage your entire community in a single system
      </h2>
      <p className="text -sm -third-color -regular">
        Who is Nextcent suitable for?
      </p>
      <div className="target-groups-item-list">
        <div className="target-groups-item">
          <div className="target-groups-item-img">
            <Image src={targetIcon1} alt="target icon" />
          </div>
          <h2 className="target-groups-item-header text -lg -secondary-color -bold">
            Membership Organisations
          </h2>
          <p className="target-groups-item-description text -xs -third-color -regular">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="target-groups-item">
          <div className="target-groups-item-img">
            <Image src={targetIcon2} alt="target icon" />
          </div>

          <h2 className="target-groups-item-header text -lg -secondary-color -bold">
            National Associations
          </h2>
          <p className="target-groups-item-description text -xs -third-color -regular">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="target-groups-item">
          <div className="target-groups-item-img">
            <Image src={targetIcon3} alt="target icon" />
          </div>
          <h2 className="target-groups-item-header text -lg -secondary-color -bold">
            Clubs And Groups
          </h2>
          <p className="target-groups-item-description text -xs -third-color -regular">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
