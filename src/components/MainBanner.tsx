import React from "react";
import Banner from "../Assets/Banner.jpg";
import { IMainBanner } from "./types/index";

const MainBanner = ({ name, about, BannerImage }: IMainBanner) => {
  const Bannerpic = BannerImage || Banner;
  return (
    <div
      style={{
        height: "27.5rem",
        position: "relative",
        backgroundImage: `url(${Bannerpic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)",
          height: "27.5rem",
        }}
      >
        <h2>{name || "Computer Engineering"}</h2>
        <div>{about || "142,765 Computer Engineers follow this"}</div>
      </div>
    </div>
  );
};

export default MainBanner;
