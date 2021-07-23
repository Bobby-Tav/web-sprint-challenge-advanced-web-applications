import React from 'react';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

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
test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColors}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
});
