import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("renders copyright message", () => {
  render(<Footer />);
  const headerElement = screen.getByText(/© 2023 Booking phone UI. All rights reserved./i);
  expect(headerElement).toBeInTheDocument();
});
