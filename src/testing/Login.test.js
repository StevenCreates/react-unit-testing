import Login from "../components/Login";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("validates username and password input", () => {
  render(<Login />);
  const username = screen.getByRole("textbox", { name: "Username" });
  fireEvent.change(username, { target: { value: "Admin" } });
  expect(username.value).toBe("Admin");
});
