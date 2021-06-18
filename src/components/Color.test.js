import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';


let testColors = [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    }
]
const testColor = {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  }
  const blankColor = {
    color: "",
    code: {
      hex: "",
    },
    id: '',
  }

  
test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blankColor}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={testColor}/>)
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const mockHandleDelete = jest.fn();
    const mockToggleEdit = jest.fn();
    render(<Color color={testColor} toggleEdit={mockToggleEdit} deleteColor={mockHandleDelete} />)

    const testDelete = screen.getByText(/x/i);

    userEvent.click(testDelete) 
    
    expect(testDelete).toBeInTheDocument();
});

// test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
// });