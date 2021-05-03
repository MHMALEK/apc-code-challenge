import React from "react";
import { StoreProviderProps } from "./types";
import { Provider } from "react-redux";
import store from "../../store";

const StoreController: React.FunctionComponent<StoreProviderProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreController;
