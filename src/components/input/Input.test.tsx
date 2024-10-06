import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("renders the input element", () => {
    render(<Input value="" onChange={() => {}} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("displays the right initial value", () => {
    render(<Input value="Test" onChange={() => {}} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("Test");
  });

  it("calls onChange  when value changes", () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "Market" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("updates the value when props change", () => {
    const { rerender } = render(<Input value="Books" onChange={() => {}} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveValue("Books");

    // Re-render with a new value
    rerender(<Input value="Music" onChange={() => {}} />);
    expect(inputElement).toHaveValue("Music");
  });

  it("displays the correct placeholder", () => {
    render(
      <Input value="" placeholder="Search posts..." onChange={() => {}} />
    );

    const inputElement = screen.getByPlaceholderText("Search posts...");
    expect(inputElement).toBeInTheDocument();
  });

  it("should have the correct input type", () => {
    render(<Input value="" onChange={() => {}} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("should render with updated value on input change", async () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Testing 123" } });
    await waitFor(() => {
      expect(input).toHaveValue("Testing 123");
    });
  });

  it("should be able to disable input", () => {
    render(<Input value="Disabled" onChange={() => {}} disabled={true} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });
});
