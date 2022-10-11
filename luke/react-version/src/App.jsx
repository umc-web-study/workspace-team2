import React from "react";
import Header from "./inflearn/header/header";
import Inflab from "./inflearn/inflab/inflab";
import BannerMain from "./inflearn/main/banner";
import SearchBar from "./inflearn/main/searchBar";
import TagSection from "./inflearn/main/tagSection";

export default function App() {
  return (
    <>
      <Inflab />
      <Header />
      <BannerMain />
      <SearchBar />
      <TagSection />
    </>
  );
}
