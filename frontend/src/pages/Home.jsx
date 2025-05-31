import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import VideoSection from "../components/VideoDoctor";
import SpecialisedCare from "../components/Test";
import PatienceStories from "../components/PatientStories";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <VideoSection />
      <SpecialisedCare />
      <PatienceStories />
      {/* <Banner /> */}
    </div>
  );
};

export default Home;
