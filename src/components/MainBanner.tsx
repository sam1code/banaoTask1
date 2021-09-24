import { Button } from "react-bootstrap";
import React from "react";
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
  const bgImgHeight = bannerHeight || "27.5rem";
  return (
    <div
      style={{
        height: `${bgImgHeight}`,
        position: "relative",
        backgroundImage: `url(${BannerImage})`,
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
          <h2>{name || "Display Name"}</h2>
          <div>{about || "Description of the title"}</div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
