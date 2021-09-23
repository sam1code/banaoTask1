import React from "react";
import {
  Header,
  Navbar,
  MainBanner,
  MobileNav,
  Main,
} from "../components/index";
import toast from "react-hot-toast";

const NotLogedIn = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating height");
    };

    window.addEventListener("resize", updateWindowDimensions);
    toast("Here is your toast.");

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  console.log("give height", width);

  return (
    <div>
      {width > 992 && <Header loginUser="" />}
      {width > 992 ? (
        <MainBanner />
      ) : (
        <MainBanner
          mobMenu
          bannerHeight="14.75rem"
          padHadTop="7rem"
          padHadLeft="2rem"
        />
      )}
      {width > 767 ? <Navbar /> : <MobileNav />}
      <Main
        title="What if famous brands had regular fonts? Meet RegulaBrands!"
        details="I’ve worked in UX for the better part of a decade. F.."
        views="50.23k views"
        first
      />
      <Main
        title="What if famous brands had regular fonts? Meet RegulaBrands!"
        details="I’ve worked in UX for the better part of a decade. F.."
        views="50.23k views"
      />
      <Main
        title="What if famous brands had regular fonts? Meet RegulaBrands!"
        details="I’ve worked in UX for the better part of a decade. F.."
        views="50.23k views"
      />
      <Main
        title="What if famous brands had regular fonts? Meet RegulaBrands!"
        details="I’ve worked in UX for the better part of a decade. F.."
        views="50.23k views"
      />
    </div>
  );
};

export default NotLogedIn;
