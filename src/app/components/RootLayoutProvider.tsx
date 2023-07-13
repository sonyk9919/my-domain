"use client";

import COLOR from "@/styles/color";
import { ThemeProvider } from "@emotion/react";

interface RootLayoutProviderProps {
  children: React.ReactNode;
}

const RootLayoutProvider = ({ children }: RootLayoutProviderProps) => {
  return <ThemeProvider theme={{ color: COLOR }}>{children}</ThemeProvider>;
};

export default RootLayoutProvider;
