import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { AppRouter } from "./router/app-router";

const queryClient = new QueryClient();

const renderWithProviders = () => {
  return render(
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <AppRouter />
        </MemoryRouter>
      </QueryClientProvider>
    </ThemeProvider>,
  );
};

describe("AppRouter", () => {
  it("renders landing content on the root route", async () => {
    renderWithProviders();

    const heading = await screen.findByRole("heading", {
      name: /see your real estate portfolio/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
