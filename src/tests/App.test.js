import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(() => {
  cleanup();
});

test("Table is rendered", () => {
  render(<App />);
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});
