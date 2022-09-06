import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import TableHeader from "../components/TableHeader";

afterEach(() => {
  cleanup();
});

test("Table has header with three columns", () => {
  const columnNames = ["Name", "Profit & Loss", "Account Type"];

  render(<TableHeader columnNames={columnNames} />);

  expect(screen.getByRole("rowgroup")).toBeInTheDocument();
  expect(screen.getAllByRole("columnheader").length).toBe(3);
});
