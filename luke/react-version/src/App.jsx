import React from "react";
import Header from "./inflearn/header/header";
import Inflab from "./inflearn/inflab/inflab";
import Apply from "./inflearn/main/apply";
import BannerMain from "./inflearn/main/banner";
import Banner_buttom from "./inflearn/main/banner2";
import Curation from "./inflearn/main/curation";
import Free_curses from "./inflearn/main/free-curses";
import Group_section from "./inflearn/main/group-section";
import New_curses from "./inflearn/main/new-curses";
import Review from "./inflearn/main/review";
import Rodmap from "./inflearn/main/rodmap";
import SearchBar from "./inflearn/main/searchBar";
import TagSection from "./inflearn/main/tagSection";
import Welcome_curses from "./inflearn/main/welcome-curses";

export default function App() {
  return (
    <>
      <Inflab />
      <Header />
      <BannerMain />
      <SearchBar />
      <TagSection />
      <Free_curses />
      <Welcome_curses />
      <Rodmap />
      <Curation />
      <New_curses />
      <Review />
      <Banner_buttom />
      <Group_section />
      <Apply />
    </>
  );
}
