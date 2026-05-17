"use client";

import React, { useState, useEffect } from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siHtml5,
  siCss,
  siNodedotjs,
  siExpress,
  siFirebase,
  siGit,
  siGithub,
  siTailwindcss,
  siPython,
  siFigma,
  siDocker,
  siMongodb,
  siPostgresql
} from "simple-icons";

const icons = [
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siHtml5,
  siCss,
  siNodedotjs,
  siExpress,
  siFirebase,
  siGit,
  siGithub,
  siTailwindcss,
  siPython,
  siFigma,
  siDocker,
  siMongodb,
  siPostgresql
];

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    }
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native" as const,
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  }
};

const renderedIcons = icons.map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
      style: { cursor: 'default' }
    }
  });
});

export default function IconCloud() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full flex items-center justify-center min-h-[400px]"></div>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Cloud {...cloudProps}>
        {renderedIcons}
      </Cloud>
    </div>
  );
}
