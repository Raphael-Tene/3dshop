import { proxy } from "valtio";

// manage state with valtio

const state = proxy({
  // state variables
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

// export state
export default state;
