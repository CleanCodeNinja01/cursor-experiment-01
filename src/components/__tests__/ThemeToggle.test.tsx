import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "../ThemeToggle";
import { useStore } from "@/store/useStore";

// Mock the Zustand store
jest.mock("@/store/useStore");

describe("ThemeToggle", () => {
  beforeEach(() => {
    // Reset the mock before each test
    jest.clearAllMocks();
  });

  it("renders the theme toggle button", () => {
    const mockToggleTheme = jest.fn();
    (useStore as jest.Mock).mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
    });

    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });

  it("toggles theme when clicked", () => {
    const mockToggleTheme = jest.fn();
    (useStore as jest.Mock).mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
    });

    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it("shows sun icon in dark mode", () => {
    (useStore as jest.Mock).mockReturnValue({
      isDarkMode: true,
      toggleTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    const sunIcon = document.querySelector("svg");
    expect(sunIcon).toBeInTheDocument();
  });

  it("shows moon icon in light mode", () => {
    (useStore as jest.Mock).mockReturnValue({
      isDarkMode: false,
      toggleTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    const moonIcon = document.querySelector("svg");
    expect(moonIcon).toBeInTheDocument();
  });
});
