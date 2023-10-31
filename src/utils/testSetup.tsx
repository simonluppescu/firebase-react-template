import React, { PropsWithChildren } from "react";
import { PreloadedState } from "redux";
import { Provider } from "react-redux";
import { render, RenderOptions } from "@testing-library/react";

import { AppStore, RootState, configureAppStore } from "@/redux/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProvider = (
  ui: React.ReactElement,
  { preloadedState = {}, store = configureAppStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
