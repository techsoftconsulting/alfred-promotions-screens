import { Dimensions } from "react-native";

export default function useDimensions() {
  const { width, height } = Dimensions.get("window");
  const { height: sheight, width: swidth } = Dimensions.get("screen");

  return {
    width,
    height,
    sheight,
    swidth,
  };
}
