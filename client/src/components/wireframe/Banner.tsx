import React from "react";
import facebook from "../../assets/facebook.svg";
import search from "../../assets/search.svg";
import menu from "../../assets/menu.svg";
import Icon from "../common/Icon";

export default function Banner(): JSX.Element {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5em",
      }}
    >
      <a href="https://facebook.com/">
        <Icon src={facebook} alt="facebook" />
      </a>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Icon src={search} alt="search" />
        <Icon src={menu} alt="menu" />
      </div>
    </header>
  );
}
