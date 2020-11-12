import Counter from "../components/Counter";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

beforeEach(() => {
  document.body.innerHTML = "";
});

test("counter increments and decrements when the buttons are clicked", () => {
  render(<Counter />);
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(<Counter />, div);
  const [decrement, increment] = div.querySelectorAll("button");
  const message = div.firstChild.querySelector("div");
  expect(message.textContent).toBe("Current count: 0");
  increment.click();
  expect(message.textContent).toBe("Current count: 1");
  decrement.click();
  expect(message.textContent).toBe("Current count: 0");
  //   div.remove();
});
