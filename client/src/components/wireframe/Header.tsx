import React from "react";
import { HeaderType } from "../../constants/enums";
import Icon from "../common/Icon";
import trending from "../../assets/trending.svg";
import gps from "../../assets/gps.svg";
import Text from "../common/Text";
import { Colors } from "../../constants/styles";

export default function Header({ type }: { type: HeaderType }): JSX.Element {
  switch (type) {
    case HeaderType.MainView:
      return (
        <section
          className="header mainview"
          style={{
            marginTop: "2em",
            display: "flex",
            flexDirection: "row",
            padding: "0.75em",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text content="Trending" fontSize={1.5} fontWeight="500" />
            <Icon src={trending} alt="Trending" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: "1em",
              }}
            >
              <Icon src={gps} alt="GPS" padding={false} />
              <Text
                content="San Fransisco"
                fontSize={0.8}
                fontWeight="500"
                color={Colors.primaryColor}
              />
            </div>
            <Text content="15 miles range" fontSize={0.8} fontWeight="500" />
          </div>
        </section>
      );
    default:
      break;
  }
  return <></>;
}
