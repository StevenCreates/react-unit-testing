import Login from "../components/Login";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("validates username and password input", () => {
  render(<Login />);
  const username = screen.getByRole("textbox", { name: "Username" });
  const password = screen.getByLabelText("Password");

  fireEvent.change(username, { target: { value: "Admin" } });
  expect(username.value).toBe("Admin");
  fireEvent.change(password, { target: { value: "Password123!" } });
  expect(password.value).toBe("Password123!");
});
