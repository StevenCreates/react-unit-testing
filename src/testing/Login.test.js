import Login from "../components/Login";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("user and password input accept text and you can change value", () => {
  render(<Login />);
  const username = screen.getByRole("textbox", { name: "Username" });
  const password = screen.getByLabelText("Password");
  const submit = screen.getByRole("button", { name: /submit/i });
  fireEvent.change(username, { target: { value: "Admin" } });
  expect(username.value).toBe("Admin");
  fireEvent.change(username, { target: { value: "$Admin" } });
  expect(username.value).toBe("$Admin");
  fireEvent.change(password, { target: { value: "Password123!" } });
  expect(password.value).toBe("Password123!");
  userEvent.click(submit);
  expect(password.value).toBe("Password123!");
  expect(username.value).toBe("$Admin");
});
