"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import readMore1 from "../../images/read-more-1.png";
import readMore2 from "../../images/read-more-2.png";
import readMore3 from "../../images/read-more-3.png";
import "@/components/ReadMore/ReadMore.scss";
export default function ReadMore() {
  const router = useRouter();
  const cardList = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: readMore1,
    },
    {
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: readMore2,
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: readMore3,
    },
  ];

  function goToBlog(title) {
    const slugTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-")

      .trim();

    router.push(`/blog/${slugTitle}`);
  }

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
        {cardList.map((card, index) => (
          <div className="read-more-card" key={index}>
            <Image src={card.image} alt="image"></Image>
            <div className="read-more-card-extra">
              <h3 className="text -third-color -semibold -md">{card.title}</h3>
              <p
                onClick={() => goToBlog(card.title)}
                className="text -primary-color -semibold -md"
              >
                Read more →
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
