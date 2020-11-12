import Counter from "../components/Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("counter increments and decrements when the buttons are clicked", () => {
  render(<Counter />);
  const decrement = screen.getByRole("button", { name: /decrement/i });
  const increment = screen.getByRole("button", { name: /increment/i });
  const message = screen.getByText(/current count/i);
  expect(message).toHaveTextContent("Current count: 0");
  userEvent.click(increment);
  expect(message).toHaveTextContent("Current count: 1");
  userEvent.click(decrement);
  expect(message).toHaveTextContent("Current count: 0");
});
