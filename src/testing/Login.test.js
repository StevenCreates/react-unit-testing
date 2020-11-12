import Login from "../components/Login";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("validates user and password", () => {
  render(<Login />);
});
