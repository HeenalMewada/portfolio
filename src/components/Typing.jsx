import { useEffect, useState } from "react";
import React from "react";
const TypingText = () => {
  const texts = [
    "Full Stack Developer",
    "Building Scalable Web Apps",
    "Turning Ideas into Products",

  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (forward && subIndex === texts[index].length) {
      setTimeout(() => setForward(false), 3000);
      return;
    }

    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 80 : 40);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  return (
    <h5>
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </h5>
  );
};

export default TypingText;