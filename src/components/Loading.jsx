import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

const Loading = () => {
  return (
    <div className="loading-container">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ width: 500, height: 500 }}
      />
    </div>
  );
};

export default Loading;
