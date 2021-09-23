import { Button } from "react-bootstrap";
import React from "react";
import Banner from "../Assets/Banner.jpg";
import { BackBtn } from "./Atoms/MainBannerAtoms";
import { IMainBanner } from "./types/index";
import { NavbarAtoms } from "./Atoms/NavBarAtoms";

const MainBanner = ({
  name,
  about,
  BannerImage,
  bannerHeight,
  padHadTop,
  padHadLeft,
  mobMenu,
}: IMainBanner) => {
  const Bannerpic = BannerImage || Banner;
  const bgImgHeight = bannerHeight || "27.5rem";
  return (
    <div
      style={{
        height: `${bgImgHeight}`,
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
          height: `${bgImgHeight}`,
        }}
      >
        {mobMenu && (
          <div className="d-flex justify-content-between pt-2 mx-3">
            <BackBtn />
            <Button variant="outline-secondary">
              <div className="d-flex">
                <NavbarAtoms />
                &nbsp;Join Group
              </div>
            </Button>
          </div>
        )}
        <div
          style={{
            paddingTop: `${padHadTop || "18rem"}`,
            paddingLeft: `${padHadLeft || "6rem"}`,
            zIndex: -1,
          }}
        >
          <h2>{name || "Computer Engineering"}</h2>
          <div>{about || "142,765 Computer Engineers follow this"}</div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
