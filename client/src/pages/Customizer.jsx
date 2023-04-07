import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import config from "../config/config";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  Tab,
  CustomButton,
  ColorPicker,
  AIPicker,
  FilePicker,
} from "../components";

const Customizer = () => {
  return <div>Customizer</div>;
};

export default Customizer;
