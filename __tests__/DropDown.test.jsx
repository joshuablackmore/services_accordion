/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import DropDown from "../app/components/info-components/DropDown";
import userEvent from "@testing-library/user-event";

describe("DropDown", () => {
  it("renders buttons will LESS and MORE", async () => {
    render(<DropDown />);

    const less = screen.getByRole("button");

    expect(less).toBeInTheDocument();
    expect(less).toHaveTextContent("LESS");

    userEvent.click(less);
  });
});
