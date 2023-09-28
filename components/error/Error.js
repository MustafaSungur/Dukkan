import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";

const Error = () => {
  return (
    <AnimatedLottieView
      resizeMode="cover"
      source={require("../../assets/error.json")}
      autoPlay
    />
  );
};

export default Error;
