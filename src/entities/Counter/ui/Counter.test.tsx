// entities/Counter/ui/Counter.test.tsx
import { screen } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { ComponentRender } from "@/shared/lib/tests/ComponentRender/ComponentRender";
import { Counter } from "../ui/Counter";

describe("Counter.test", () => {
  test("test", () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("decrement", () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });
});
