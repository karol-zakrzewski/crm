import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../../utils/utils-for-tests";
import AddCompany from "../AddCompany";

it("should show error message if form inputs are invalid", () => {
  renderWithProviders(
    <MemoryRouter>
      <AddCompany />
    </MemoryRouter>
  );

  const submitBtn = screen.getByText("confirm");
  fireEvent.click(submitBtn);
  const errorEl = screen.getAllByText(/required/i);

  expect(errorEl.length).toBeGreaterThan(0);
});
