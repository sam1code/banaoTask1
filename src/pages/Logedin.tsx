import React from "react";
import {
  Header,
  Navbar,
  MainBanner,
  MobileNav,
  Main,
} from "../components/index";
import edit from "../Assets/edit.png";
import { Data, MainBannerData } from "../../mock/data";

const LogedIn = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating width");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  console.log("give height", width);
  const postCount = 32;

  return (
    <div>
      {width > 992 && <Header loginUser />}
      {width > 992 ? (
        <MainBanner
          BannerImage={MainBannerData.image}
          name={MainBannerData.title}
          about={MainBannerData.description}
        />
      ) : (
        <MainBanner
          mobMenu
          bannerHeight="14.75rem"
          padHadTop="7rem"
          padHadLeft="2rem"
          BannerImage={MainBannerData.image}
          name={MainBannerData.title}
          about={MainBannerData.description}
        />
      )}
      {width > 767 ? <Navbar postCount={`${postCount}`} /> : <MobileNav />}

      {Data.map((elem, ind) => {
        return (
          <Main
            title={elem.title}
            details={elem.description}
            views={elem.views}
            imgSrc={elem.imgSrc}
            pic={elem.profilePic}
            tag={elem.tag}
            key={ind}
            first={ind}
            name={elem.auther}
            logedin
            btnData={elem.btnData}
          />
        );
      })}

      {width < 767 && (
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            cursor: "pointer",
          }}
        >
          <img src={edit} />
        </div>
      )}
    </div>
  );
};

export default LogedIn;
