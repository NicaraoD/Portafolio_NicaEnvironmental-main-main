import { createContext, useContext, useState, ReactNode } from "react";

type HoverContextType = {
  isHover: boolean;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
};

const HoverContext = createContext<HoverContextType | null>(null);

export const HoverProvider = ({ children }: { children: ReactNode }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <HoverContext.Provider value={{ isHover, setIsHover }}>
      {children}
    </HoverContext.Provider>
  );
};

export const useHover = () => {
  const context = useContext(HoverContext);

  if (!context) {
    throw new Error("useHover must be used within a HoverProvider");
  }

  return context;
};
