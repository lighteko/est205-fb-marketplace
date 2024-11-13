import React from "react";
import Banner from "../components/wireframe/Banner";
import NavigationBar from "../components/wireframe/NavigationBar";
import Header from "../components/wireframe/Header";
import { HeaderType } from "../constants/enums";


export default function MainView(): JSX.Element {
  return (
    <>
      <Banner />
      <Header type={HeaderType.MainView}/>
      <div></div>
      <NavigationBar />
    </>
  );
}
