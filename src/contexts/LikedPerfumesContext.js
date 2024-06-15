import React, { createContext, useState, useContext } from 'react';

const LikedPerfumesContext = createContext();

export const LikedPerfumesProvider = ({ children }) => {
  const [likedPerfumes, setLikedPerfumes] = useState([]);

  return (
    <LikedPerfumesContext.Provider value={{ likedPerfumes, setLikedPerfumes }}>
      {children}
    </LikedPerfumesContext.Provider>
  );
};

export const useLikedPerfumes = () => useContext(LikedPerfumesContext);
