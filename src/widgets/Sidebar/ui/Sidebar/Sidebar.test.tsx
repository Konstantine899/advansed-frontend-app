// src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx

import { fireEvent, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    ComponentRender(<SidebarWithTranslation />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
