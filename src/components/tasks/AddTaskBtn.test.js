import React from 'react';
import { render,screen ,fireEvent} from "@testing-library/react";

import { AddTaskBtn } from "./AddTaskBtn";

test('open modal button is clickable ',async () => {
    const show = jest.fn();
    render(<AddTaskBtn show={show}/>);
    const buttonElement = screen.getByRole('add-modal');
    fireEvent.click(buttonElement);
    expect(show).toHaveBeenCalledTimes(1);
  });