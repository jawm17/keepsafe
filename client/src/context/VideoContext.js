import React, { createContext, useContext, useEffect, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [zoomed, setZoomed] = useState(false);
  const [currentColor, setCurrentColor] = useState("white");

  // useEffect(() => {
  //   document.body.style.backgroundColor = currentColor;
  // }, [currentColor]);

  return (
    <VideoContext.Provider value={{ isMuted, setIsMuted, zoomed, setZoomed, setCurrentColor }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);