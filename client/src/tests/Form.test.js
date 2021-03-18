import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

describe("Form", () => {

  beforeEach(() => {
    render(<App />);
  });


  it("has an invisible AddForm", () => {
    const addForm = screen.getByTestId("addForm");
    expect(addForm).not.toHaveClass("visible");
  });

  it("has does toggle the form when Add A Product is Clicked", () => {
    const addForm = screen.getByTestId("addForm");
    const addProductButton = screen.getByRole("link", {name: "Add A Product"});
    userEvent.click(addProductButton);
    expect(addForm).toHaveClass("visible");
    const cancelButton = screen.getByRole("link", {name: "Cancel"});
    userEvent.click(cancelButton);
    expect(addForm).not.toHaveClass("visible");
  });

  it("does have 3 inputs", () => {
    const addProductButton = screen.getByRole("link", {name: "Add A Product"});
    userEvent.click(addProductButton);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toEqual(3);
  });

});