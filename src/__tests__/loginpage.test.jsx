import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Login from "../containers/Login";

describe("Login Container", () => {
  test("load login component", () => {
    render(<Login />);
    expect(
      screen.getByPlaceholderText("Enter your E-mail")
    ).toBeInTheDocument();
  });
});
