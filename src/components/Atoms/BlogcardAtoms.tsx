import React from "react";
import { Button } from "react-bootstrap";
import img from "../../Assets/MyPic.jpg";

export const BlogcardAtoms = () => {
  return (
    <div>
      <svg
        width="20"
        height="6"
        viewBox="0 0 20 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6666 3.00002C14.6666 4.28335 15.7166 5.33335 16.9999 5.33335C18.2833 5.33335 19.3333 4.28335 19.3333 3.00002C19.3333 1.71669 18.2833 0.666687 16.9999 0.666687C15.7166 0.666687 14.6666 1.71669 14.6666 3.00002ZM12.3333 3.00002C12.3333 1.71669 11.2833 0.666687 9.99992 0.666687C8.71659 0.666687 7.66659 1.71669 7.66659 3.00002C7.66659 4.28335 8.71658 5.33335 9.99992 5.33335C11.2833 5.33335 12.3333 4.28335 12.3333 3.00002ZM5.33325 3.00002C5.33325 1.71669 4.28325 0.666686 2.99992 0.666686C1.71659 0.666686 0.666586 1.71669 0.666586 3.00002C0.666586 4.28335 1.71658 5.33335 2.99992 5.33335C4.28325 5.33335 5.33325 4.28335 5.33325 3.00002Z"
          fill="#212529"
        />
      </svg>
    </div>
  );
};
export const Share = () => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.52499C4.72 8.35249 4.75 8.17999 4.75 7.99999C4.75 7.81999 4.72 7.64749 4.6825 7.47499L9.97 4.39249C10.375 4.76749 10.9075 4.99999 11.5 4.99999C12.745 4.99999 13.75 3.99499 13.75 2.74999C13.75 1.50499 12.745 0.499992 11.5 0.499992C10.255 0.499992 9.25 1.50499 9.25 2.74999C9.25 2.92999 9.28 3.10249 9.3175 3.27499L4.03 6.35749C3.625 5.98249 3.0925 5.74999 2.5 5.74999C1.255 5.74999 0.25 6.75499 0.25 7.99999C0.25 9.24499 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.64249L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z"
        fill="#212529"
      />
    </svg>
  );
};
export const ShareBtn = () => {
  return (
    <Button variant="light">
      <div className="d-flex ">
        <div style={{ paddingTop: ".019rem" }}>
          <Share />
        </div>
        &nbsp; Share
      </div>
    </Button>
  );
};

export const LocationMark = () => {
  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
          fill="black"
        />
        <path
          d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
          fill="black"
        />
      </svg>
    </>
  );
};
const PenMark = () => {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
          fill="black"
        />
      </svg>
    </>
  );
};
const WhyLocation = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33337 9.00004H7.66671V10.3334H6.33337V9.00004ZM6.33337 3.66671H7.66671V7.66671H6.33337V3.66671ZM6.99337 0.333374C3.31337 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99337 0.333374ZM7.00004 12.3334C4.05337 12.3334 1.66671 9.94671 1.66671 7.00004C1.66671 4.05337 4.05337 1.66671 7.00004 1.66671C9.94671 1.66671 12.3334 4.05337 12.3334 7.00004C12.3334 9.94671 9.94671 12.3334 7.00004 12.3334Z"
        fill="black"
      />
    </svg>
  );
};
export const Location = ({ location }) => {
  return (
    <>
      <div
        style={{ display: "flex", width: "15rem" }}
        className="border-bottom"
      >
        <div style={{ padding: "1rem" }}>
          <LocationMark />
        </div>

        <div style={{ padding: "1.1rem", paddingRight: "2rem" }}>
          {location}
        </div>
        <div style={{ padding: "1rem" }}>
          <PenMark />
        </div>
      </div>
      <br />
      <br />
      <div className="d-flex" style={{ width: "15rem", fontSize: ".8rem" }}>
        <div style={{ width: "2rem" }}>
          <WhyLocation />
        </div>
        Your location will help us serve better and extend a personalised
        experience.
      </div>
    </>
  );
};
export const Eye = () => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z"
        fill="#525252"
      />
    </svg>
  );
};
const Like = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z"
        fill="black"
      />
      <path
        d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
        fill="black"
      />
    </svg>
  );
};
export const Follower = () => {
  return (
    <div>
      <div className="d-flex">
        <Like /> RECOMANDED GROUPS
      </div>
      <br />
      <br />
      <div className="d-flex justify-content-between mt-2">
        <img src={img} alt="" style={{ width: "3rem", borderRadius: "50px" }} />
        <button
          style={{
            backgroundColor: "#EDEEF0",
            border: "none",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            borderRadius: "50px",
          }}
        >
          Follow
        </button>

        <div className="d-flex justify-content-between">
          <div>&nbsp;</div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <img src={img} alt="" style={{ width: "3rem", borderRadius: "50px" }} />
        <button
          style={{
            backgroundColor: "#EDEEF0",
            border: "none",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            borderRadius: "50px",
          }}
        >
          Follow
        </button>

        <div className="d-flex justify-content-between">
          <div>&nbsp;</div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <img src={img} alt="" style={{ width: "3rem", borderRadius: "50px" }} />
        <button
          style={{
            backgroundColor: "#EDEEF0",
            border: "none",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            borderRadius: "50px",
          }}
        >
          Follow
        </button>

        <div className="d-flex justify-content-between">
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  );
};
