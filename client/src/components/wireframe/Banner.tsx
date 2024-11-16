import React from "react";
import facebook from "../../assets/facebook.svg";
import search from "../../assets/icons/search.svg";
import menu from "../../assets/icons/menu.svg";
import Icon from "../common/Icon";
import IconButton from "../common/IconButton";
import { Link } from "react-router-dom";

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
        <Icon src={facebook} alt="facebook" autoSize />
      </a>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Icon src={search} alt="search" />
        <Link to="/categories">
          <Icon src={menu} alt="menu" />
        </Link>
      </div>
    </header>
  );
}
