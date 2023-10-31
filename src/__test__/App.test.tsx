import React from "react";
import { render, screen } from "@testing-library/react";

import { renderWithProvider } from "@/utils/testSetup";
import App from "@/App";

describe("<App />", () => {
  it("renders the component", () => {
    renderWithProvider(<App />);

    expect(screen.getByText(/Finally, some stupid shit/)).toBeInTheDocument();
  });
});
