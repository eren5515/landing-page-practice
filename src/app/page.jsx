import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import "@/styles/main.scss";
import Clients from "@/components/Clients/Clients";
import TargetGroups from "@/components/TargetGroups/TargetGroups";
import Pixelgrade from "@/components/Pixelgrade/Pixelgrade";
import Statistics from "@/components/Statistics/Statistics";
import HowToDesign from "@/components/HowToDesign/HowToDesign";
import CustomerNote from "@/components/CustomerNote/CustomerNote";
import ReadMore from "@/components/ReadMore/ReadMore";
import GetDemo from "@/components/GetDemo/GetDemo";
export default function Home() {

  return (
    <div className="container">
      <Hero/>
      <Clients/>
      <TargetGroups/>
      <Pixelgrade/>
      <Statistics/>
      <HowToDesign/>
      <CustomerNote/>
      <ReadMore/>
      <GetDemo/>
    </div>
  );
}
