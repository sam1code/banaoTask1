import React from "react";
import img from "../Assets/Banner.jpg";
import profile from "../Assets/profile.jpg";
import { Eye, Location, ShareBtn } from "./Atoms/BlogcardAtoms";

const BlogCard = ({ name, title, details, pic, inBoxTxt, views }) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating height");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const Mobile = () => {
    return (
      <div className="d-flex flex-column align-items-center  rounded">
        <div
          className="mw-100 rounded border border-secondary"
          style={{
            width: "22.5rem",
            border: "1px",
            height: "23.3rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={img}
            className="w-100 rounded"
            style={{ height: "10rem" }}
            alt=""
          />

          <p style={{ fontSize: ".8rem", marginTop: "1rem" }}>
            &nbsp;&#9997;&#65039; Article
          </p>
          <div className="d-flex ">
            <b>
              <p>{title}</p>
            </b>
          </div>
          <p style={{ fontSize: ".9rem" }}>{details}</p>
          <div>{inBoxTxt}</div>
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <img
                src={pic || profile}
                className="rounded-circle d-inline-block mt-1"
                style={{ height: "3rem", marginTop: "-0.5rem" }}
                alt=""
              />
              <div>
                {name || "Person Name"}
                <br />
                <small>{views}</small>
              </div>
            </div>
            <ShareBtn />
          </div>
        </div>
      </div>
    );
  };
  const Large = () => {
    return (
      <div className="d-flex">
        <div
          style={{ flex: 2 }}
          className="d-flex flex-column align-items-center  rounded"
        >
          <div
            className="mw-100 rounded border border-secondary"
            style={{
              width: "43.25rem",
              border: "1px",
              height: "29.5rem",
              borderRadius: "5px",
            }}
          >
            <img
              src={img}
              className="w-100 rounded"
              style={{ height: "14.75rem" }}
              alt=""
            />

            <p style={{ fontSize: ".8rem", marginTop: "1rem" }}>
              &nbsp;&#9997;&#65039; Article
            </p>
            <div className="d-flex ">
              <b>
                <h3>{title}</h3>
              </b>
            </div>
            <p>{details}</p>
            <div>{inBoxTxt}</div>
            <div className="d-flex justify-content-between">
              <div className="d-flex ">
                <img
                  src={pic || profile}
                  className="rounded-circle d-inline-block mt-1"
                  style={{ height: "3rem", marginTop: "-0.5rem" }}
                  alt=""
                />
                <div className="pt-3">{name || "Person Name"}</div>
              </div>
              <div className="pt-2">
                <Eye />
                <small>{views}</small>
                <ShareBtn />
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Location location="noida" />
        </div>
      </div>
    );
  };

  return (
    <div className="m-5">
      {width < 767 ? (
        <Mobile />
      ) : (
        <div>
          <Large />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
