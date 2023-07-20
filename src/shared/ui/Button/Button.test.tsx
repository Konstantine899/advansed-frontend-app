// src/shared/ui/Button/Button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "../../ui/Button/Button";

describe("Button", () => {
  test("Test Render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("Theme Button Clear", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
