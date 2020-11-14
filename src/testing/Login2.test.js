import Login2 from "../components/Login2";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("user and password input accept text and you can change value", () => {
  let submittedData;
  const handleSubmit = (data) => {
    submittedData = data;
  };
  render(<Login2 onSubmit={handleSubmit} />);
  userEvent.type(screen.getByLabelText(/username/i), "Steven Hofheins");
  userEvent.type(screen.getByLabelText(/password/i), "Password123");
  userEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(submittedData).toEqual({
    username: "Steven Hofheins",
    password: "Password123",
  });
});
