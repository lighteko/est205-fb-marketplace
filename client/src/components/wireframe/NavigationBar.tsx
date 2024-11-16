import React, { useState, CSSProperties } from "react";
import home_filled from "../../assets/icons/home_filled.svg";
import home_outline from "../../assets/icons/home_outline.svg";
import chat_filled from "../../assets/icons/chat_filled.svg";
import chat_outline from "../../assets/icons/chat_outline.svg";
import heart_filled from "../../assets/icons/heart_filled.svg";
import heart_outline from "../../assets/icons/heart_outline.svg";
import profile_filled from "../../assets/icons/profile_filled.svg";
import profile_outline from "../../assets/icons/profile_outline.svg";
import deal_filled from "../../assets/icons/deal_filled.svg";
import deal_outline from "../../assets/icons/deal_outline.svg";
import Icon from "../common/Icon";
import Text from "../common/Text";
import { Colors } from "../../constants/styles";
import CircButton from "../common/CircButton";
import { useNavigate } from "react-router-dom";

export default function NavigationBar(): JSX.Element {
  const viewBtnStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "15%",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
  };
  const [selected, setSelected] = useState("home");
  const navigate = useNavigate();
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <CircButton
        text="+ Post"
        onClick={() => navigate("/post/create")}
        size={6}
      />
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          boxShadow: "0px -2px 30px 0px rgba(0, 0, 0, 0.15)",
          width: "100%",
          zIndex: 5,
        }}
      >
        <div style={viewBtnStyle} onClick={() => setSelected("home")}>
          <Icon
            src={selected === "home" ? home_filled : home_outline}
            alt="home"
            size={1.5}
          />
          <Text
            content="Home"
            fontSize={0.85}
            fontWeight={selected === "home" ? "600" : "400"}
            color={Colors.primaryColor}
          />
        </div>
        <div style={viewBtnStyle} onClick={() => setSelected("chats")}>
          <Icon
            src={selected === "chats" ? chat_filled : chat_outline}
            alt="chat"
            size={1.5}
          />
          <Text
            content="Chats"
            fontSize={0.85}
            fontWeight={selected === "chats" ? "600" : "400"}
            color={Colors.primaryColor}
          />
        </div>
        <div style={viewBtnStyle} onClick={() => setSelected("favourites")}>
          <Icon
            src={selected === "favourites" ? heart_filled : heart_outline}
            alt="heart"
            size={1.5}
          />
          <Text
            content="Favourites"
            fontSize={0.85}
            fontWeight={selected === "favourites" ? "600" : "400"}
            color={Colors.primaryColor}
          />
        </div>
        <div style={viewBtnStyle} onClick={() => setSelected("deal")}>
          <Icon
            src={selected === "deal" ? deal_filled : deal_outline}
            alt="deal"
            size={1.5}
          />
          <Text
            content="My Deals"
            fontSize={0.85}
            fontWeight={selected === "deal" ? "600" : "400"}
            color={Colors.primaryColor}
          />
        </div>
        <div style={viewBtnStyle} onClick={() => setSelected("profile")}>
          <Icon
            src={selected === "profile" ? profile_filled : profile_outline}
            alt="profile"
            size={1.5}
          />
          <Text
            content="Profile"
            fontSize={0.85}
            fontWeight={selected === "profile" ? "600" : "400"}
            color={Colors.primaryColor}
          />
        </div>
      </nav>
    </footer>
  );
}
