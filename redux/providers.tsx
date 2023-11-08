"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface ProviderType {
  children: ReactNode;
}
const Providers: React.FC<ProviderType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
